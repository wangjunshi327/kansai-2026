export type PlaceCategory = '景点' | '美食' | '住宿' | '交通' | '购物'

export interface KansaiPlace {
  id: string
  name: string
  city: string
  category: PlaceCategory
  lat: number
  lng: number
  address: string
  summary: string
  tips?: string
  website?: string
}

export interface ItineraryItem {
  id: string
  dayId: string
  time: string
  endTime?: string
  title: string
  placeId?: string
  kind: '交通' | '景点' | '用餐' | '住宿' | '自由活动'
  note?: string
}

export interface DecisionRoute {
  id: string
  label: string
  title: string
  condition: string
  items: ItineraryItem[]
}

export interface TripReminder {
  id: string
  date: string
  title: string
  timing: string
  priority: '重要' | '一般'
  note: string
}

export interface TripDay {
  id: string
  date: string
  city: string
  title: string
  summary: string
}

export interface Booking {
  id: string
  type: '航班' | '列车' | '巴士' | '酒店' | '餐厅' | '活动'
  title: string
  date: string
  time: string
  endTime?: string
  location: string
  reference?: string
  status: '已确认' | '待确认'
  note?: string
}

export interface GuideEntry {
  id: string
  title: string
  category: '交通' | '实用信息' | '文化礼仪' | '购物'
  summary: string
  details: string[]
}
