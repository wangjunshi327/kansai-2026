import { useEffect, useMemo, useState } from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router'
import { AlertTriangle, CalendarDays, ChevronDown, Clock3, Compass, Info, Map, MapPin, Search, Soup, Ticket, TrainFront } from 'lucide-react'
import { CircleMarker, MapContainer, Polyline, Popup, TileLayer, useMap } from 'react-leaflet'
import { bookings, days, decisionRoutes, guide, itinerary, placeById, places, reminders, trip } from './data/kansai2026'
import type { Booking, ItineraryItem, KansaiPlace, TripDay, TripReminder } from './data/types'

const navItems = [
  { to: '/today', label: '今日', icon: Clock3 },
  { to: '/itinerary', label: '行程', icon: CalendarDays },
  { to: '/map', label: '地图', icon: Map },
  { to: '/bookings', label: '预订', icon: Ticket },
  { to: '/food', label: '美食', icon: Soup },
  { to: '/guide', label: '指南', icon: Compass },
]

const dateFormatter = new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' })

function localDate(now = new Date()) {
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00`))
}

function currentDay(): TripDay {
  const today = localDate()
  return days.find(day => day.date === today) ?? days.find(day => day.date >= today) ?? days[0]
}

function AppShell() {
  return (
    <div className="kansai-app">
      <aside className="side-nav">
        <div className="brand-mark"><span>関西</span><strong>Kansai 2026</strong></div>
        <p className="trip-subtitle">{trip.subtitle}</p>
        <nav aria-label="主要导航">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <Icon size={20} /><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="privacy-note"><Info size={17} /><span>仅保存公共行程信息，不含票据和个人资料</span></div>
      </aside>
      <main className="page-area">
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="*" element={<Navigate to="/today" replace />} />
        </Routes>
      </main>
      <nav className="bottom-nav" aria-label="手机导航">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>
            <Icon size={20} /><span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="page-header"><p>{eyebrow}</p><h1>{title}</h1><span>{description}</span></header>
}

function TodayPage() {
  const day = currentDay()
  const items = itinerary.filter(item => item.dayId === day.id)
  const dayBookings = bookings.filter(item => item.date === day.date)
  const dayReminders = reminders.filter(item => item.date === day.date)
  return <div className="content-page">
    <section className="hero-card">
      <div><p className="hero-kicker">{formatDate(day.date)}</p><h1>{day.city}，{day.title}</h1><p>{day.summary}</p></div>
      <div className="day-count">第 {days.indexOf(day) + 1} 天</div>
    </section>
    <div className="section-title"><div><p>今日安排</p><h2>按自己的节奏出发</h2></div><span>{items.length} 项</span></div>
    <Timeline items={items} />
    {day.id === 'd2' && <DecisionRoutes />}
    {dayReminders.length > 0 && <ReminderSection items={dayReminders} />}
    {dayBookings.length > 0 && <section className="compact-section"><h2>今日预订</h2><div className="booking-grid">{dayBookings.map(item => <BookingCard key={item.id} booking={item} />)}</div></section>}
  </div>
}

function Timeline({ items }: { items: ItineraryItem[] }) {
  return <div className="timeline">{items.map((item, index) => {
    const place = item.placeId ? placeById.get(item.placeId) : undefined
    return <article className="timeline-row" key={item.id}>
      <div className="timeline-time">{item.time}</div>
      <div className="timeline-track"><i />{index < items.length - 1 && <span />}</div>
      <div className="timeline-card"><div className="tag">{item.kind}</div><h3>{item.title}</h3>{place && <p><MapPin size={15} />{place.address}</p>}{item.note && <p>{item.note}</p>}</div>
    </article>
  })}</div>
}

function ItineraryPage() {
  const [selected, setSelected] = useState(currentDay().id)
  const day = days.find(item => item.id === selected) ?? days[0]
  return <div className="content-page">
    <PageHeader eyebrow="完整行程" title="每天去哪里，一目了然" description="选择日期查看当天安排；所有时间均为当地时间。" />
    <div className="day-tabs">{days.map((item, index) => <button key={item.id} onClick={() => setSelected(item.id)} className={item.id === selected ? 'active' : ''}><span>第 {index + 1} 天</span><strong>{item.date.slice(5).replace('-', '/')}</strong><small>{item.city}</small></button>)}</div>
    <section className="day-heading"><div><p>{formatDate(day.date)}</p><h2>{day.title}</h2></div><span>{day.summary}</span></section>
    <Timeline items={itinerary.filter(item => item.dayId === selected)} />
    {selected === 'd2' && <DecisionRoutes />}
    <ReminderSection items={reminders.filter(item => item.date === day.date)} />
  </div>
}

function DecisionRoutes() {
  const [selected, setSelected] = useState(decisionRoutes[0].id)
  const route = decisionRoutes.find(item => item.id === selected) ?? decisionRoutes[0]
  return <section className="decision-section">
    <div className="decision-heading"><div><p>10 月 3 日 · 现场决定</p><h2>下午走哪条路线？</h2></div><span>两条路线 17:30 重新合流</span></div>
    <div className="route-switch" role="tablist" aria-label="下午备选路线">{decisionRoutes.map(item => <button key={item.id} onClick={() => setSelected(item.id)} className={item.id === selected ? 'active' : ''}><small>{item.label}</small><strong>{item.title}</strong><span>{item.condition}</span></button>)}</div>
    <div className="route-content"><Timeline items={route.items} /></div>
  </section>
}

function ReminderSection({ items }: { items: TripReminder[] }) {
  if (!items.length) return null
  return <section className="reminder-section"><div className="reminder-title"><AlertTriangle size={20} /><div><p>出发前提醒</p><h2>这些事项还需要确认</h2></div></div><div className="reminder-grid">{items.map(item => <article key={item.id} className={item.priority === '重要' ? 'important' : ''}><div><span>{item.priority}</span><time>{formatDate(item.date)}</time></div><h3>{item.title}</h3><strong>{item.timing}</strong><p>{item.note}</p></article>)}</div></section>
}

function FitMap({ visiblePlaces }: { visiblePlaces: KansaiPlace[] }) {
  const map = useMap()
  useEffect(() => {
    if (visiblePlaces.length) map.fitBounds(visiblePlaces.map(place => [place.lat, place.lng]), { padding: [40, 40] })
  }, [map, visiblePlaces])
  return null
}

function MapPage() {
  const [dayId, setDayId] = useState('all')
  const routePlaces = useMemo(() => {
    if (dayId === 'all') return []
    const ids = itinerary.filter(item => item.dayId === dayId).map(item => item.placeId).filter(Boolean)
    return ids.map(id => placeById.get(id!)).filter((place): place is KansaiPlace => Boolean(place))
  }, [dayId])
  const visiblePlaces = useMemo(() => {
    if (dayId === 'all') return places
    const ids = new Set(itinerary.filter(item => item.dayId === dayId).map(item => item.placeId).filter(Boolean))
    if (dayId === 'd2') decisionRoutes.flatMap(route => route.items).forEach(item => item.placeId && ids.add(item.placeId))
    return places.filter(place => ids.has(place.id))
  }, [dayId])
  const route = routePlaces.map(place => [place.lat, place.lng] as [number, number])
  return <div className="content-page map-page">
    <PageHeader eyebrow="旅行地图" title="地点与路线" description="点击地图标记查看中文说明和地址。" />
    <label className="map-filter">显示范围<select value={dayId} onChange={event => setDayId(event.target.value)}><option value="all">全部行程</option>{days.map((day, index) => <option key={day.id} value={day.id}>第 {index + 1} 天 · {day.city}</option>)}</select></label>
    <div className="map-frame"><MapContainer center={[34.69, 135.31]} zoom={9} scrollWheelZoom>
      <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FitMap visiblePlaces={visiblePlaces} />
      {route.length > 1 && <Polyline positions={route} pathOptions={{ color: '#d45d3f', weight: 3, opacity: .65 }} />}
      {visiblePlaces.map(place => <CircleMarker key={place.id} center={[place.lat, place.lng]} radius={9} pathOptions={{ color: '#fff', fillColor: '#d45d3f', fillOpacity: 1, weight: 3 }}><Popup><strong>{place.name}</strong><br />{place.summary}<br /><small>{place.address}</small></Popup></CircleMarker>)}
    </MapContainer></div>
  </div>
}

function BookingCard({ booking }: { booking: Booking }) {
  const Icon = booking.type === '航班' || booking.type === '列车' || booking.type === '巴士' ? TrainFront : Ticket
  return <article className="booking-card"><div className="booking-icon"><Icon size={21} /></div><div><div className="booking-top"><span>{booking.type}</span><i className={booking.status === '已确认' ? 'confirmed' : ''}>{booking.status}</i></div><h3>{booking.title}</h3><p>{formatDate(booking.date)} · {booking.time}</p><p>{booking.location}</p>{booking.reference && <p>班次：{booking.reference}</p>}{booking.note && <small>{booking.note}</small>}</div></article>
}

function BookingsPage() {
  const [filter, setFilter] = useState('全部')
  const types = ['全部', '航班', '列车', '巴士', '酒店', '餐厅', '活动']
  const visible = filter === '全部' ? bookings : bookings.filter(item => item.type === filter)
  return <div className="content-page"><PageHeader eyebrow="公共行程信息" title="预订与交通" description="这里只记录时间和地点，不保存确认码、票号、姓名或票据文件。" /><ReminderSection items={reminders} /><div className="filter-row">{types.map(type => <button key={type} onClick={() => setFilter(type)} className={filter === type ? 'active' : ''}>{type}</button>)}</div><div className="booking-grid">{visible.map(item => <BookingCard key={item.id} booking={item} />)}</div></div>
}

function PlaceCard({ place }: { place: KansaiPlace }) {
  const [saved, setSaved] = useState(() => localStorage.getItem(`kansai-saved-${place.id}`) === '1')
  const toggle = () => { const next = !saved; setSaved(next); localStorage.setItem(`kansai-saved-${place.id}`, next ? '1' : '0') }
  return <article className="place-card"><div className="place-photo"><span>{place.category === '美食' ? '食' : '旅'}</span></div><div className="place-body"><p>{place.city} · {place.category}</p><h3>{place.name}</h3><span>{place.summary}</span><small><MapPin size={14} />{place.address}</small>{place.tips && <div className="tip">提示：{place.tips}</div>}<button onClick={toggle}>{saved ? '已收藏' : '收藏地点'}</button></div></article>
}

function FoodPage() {
  const [query, setQuery] = useState('')
  const food = places.filter(place => place.category === '美食' && `${place.name}${place.city}${place.summary}`.includes(query))
  return <div className="content-page"><PageHeader eyebrow="关西味道" title="美食清单" description="收藏想吃的地点，记录只保存在当前设备。" /><label className="search-box"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="搜索餐厅、市场或城市" /></label><div className="place-grid">{food.map(place => <PlaceCard key={place.id} place={place} />)}</div></div>
}

function GuidePage() {
  const [open, setOpen] = useState<string | null>(guide[0]?.id ?? null)
  return <div className="content-page"><PageHeader eyebrow="出发前读一读" title="旅行指南" description="常用交通、礼仪和紧急信息集中在这里。" /><div className="guide-list">{guide.map(entry => <article key={entry.id} className={open === entry.id ? 'open' : ''}><button onClick={() => setOpen(open === entry.id ? null : entry.id)}><div><span>{entry.category}</span><h3>{entry.title}</h3><p>{entry.summary}</p></div><ChevronDown size={20} /></button>{open === entry.id && <ul>{entry.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}</article>)}</div></div>
}

export default AppShell
