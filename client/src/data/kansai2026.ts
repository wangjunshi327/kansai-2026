import type { Booking, DecisionRoute, GuideEntry, ItineraryItem, KansaiPlace, TripDay, TripReminder } from './types'

export const trip = {
  name: 'Kansai 2026',
  title: '关西家庭旅行',
  startDate: '2026-10-02',
  endDate: '2026-10-06',
  subtitle: '神户 · 舞子 · 有马温泉 · 大阪',
}

export const days: TripDay[] = [
  { id: 'd1', date: '2026-10-02', city: '神户', title: '北京—神户', summary: '抵达关西、入住休息，晚上在神户港轻松散步' },
  { id: 'd2', date: '2026-10-03', city: '神户', title: '北野、神户牛与港口烟花', summary: '上午固定游览，下午根据体力在白鹤酒造与休息路线中选择' },
  { id: 'd3', date: '2026-10-04', city: '舞子／有马温泉', title: '神户—舞子—有马温泉', summary: '轻装前往舞子看海与大桥，下午乘巴士入住温泉酒店' },
  { id: 'd4', date: '2026-10-05', city: '大阪', title: '有马温泉—大阪难波', summary: '上午享受温泉小镇，下午前往难波购物和用餐' },
  { id: 'd5', date: '2026-10-06', city: '大阪', title: '大阪难波—关西机场—北京', summary: '从容早餐和退房，乘南海 Rapi:t 前往机场' },
]

export const places: KansaiPlace[] = [
  { id: 'pek', name: '北京首都国际机场 T3', city: '北京', category: '交通', lat: 40.0524, lng: 116.6157, address: '北京市顺义区首都机场三号航站楼', summary: '10 月 2 日去程航班出发机场', tips: '有托运行李，计划 06:00 到达。' },
  { id: 'kix', name: '关西国际机场 T1', city: '大阪', category: '交通', lat: 34.4347, lng: 135.244, address: '大阪府泉佐野市泉州空港北1', summary: '本次旅行抵达和返程机场', tips: '国际航班需要为值机、安检和出境预留充足时间。' },
  { id: 'kobe-hotel', name: '神户美利坚公园东方大酒店', city: '神户', category: '住宿', lat: 34.6806, lng: 135.1885, address: '神户港美利坚公园', summary: '10 月 2 日至 4 日入住，位于神户港边', image: '/kansai-2026/trip-images/kobe-hotel-arrival.jpg', imageAlt: '从神户港看神户美利坚公园东方大酒店' },
  { id: 'meriken', name: '美利坚公园与神户港', city: '神户', category: '景点', lat: 34.6826, lng: 135.189, address: '神户市中央区波止场町', summary: '适合饭后散步和观看港口夜景、烟花', tips: '夜间活动视天气和家人体力灵活调整。', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BE_KOBE_20190216.jpg?width=1280', imageAlt: '神户美利坚公园 BE KOBE 标志与港口景色' },
  { id: 'kobe-fireworks', name: '神户港烟花', city: '神户', category: '景点', lat: 34.6826, lng: 135.189, address: '神户市中央区波止场町', summary: '酒店附近观看的神户港夜间烟花', image: '/kansai-2026/trip-images/kobe-fireworks.jpg', imageAlt: '神户港海面上空的夜间烟花' },
  { id: 'all-flags', name: 'ALL FLAGS', city: '神户', category: '美食', lat: 34.6807, lng: 135.1885, address: '神户美利坚公园东方大酒店内', summary: '抵达当晚的酒店自助晚餐', tips: '已经预约。' },
  { id: 'nishimura', name: '神户にしむら珈琲店 中山手本店', city: '神户', category: '美食', lat: 34.6971, lng: 135.1906, address: '神户市中央区中山手通1丁目', summary: '老神户咖啡馆，10 月 3 日早餐地点', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kobe_Nishimura_Coffee%2CNakayamate.JPG?width=1280', imageAlt: '神户にしむら珈琲店中山手本店外观' },
  { id: 'kitano', name: '北野异人馆街', city: '神户', category: '景点', lat: 34.7004, lng: 135.1908, address: '神户市中央区北野町', summary: '看老建筑与街区氛围，不追求全部打卡', tips: '根据老人和孩子状态决定进入哪些建筑。', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Weathercock_House_Kobe_Kitano_Ijinkan_%E9%A2%A8%E8%A6%8B%E9%B6%8F%E3%81%AE%E9%A4%A8%EF%BC%88%E6%97%A7%E3%83%88%E3%83%BC%E3%83%9E%E3%82%B9%E4%BD%8F%E5%AE%85%EF%BC%89.jpg?width=1280', imageAlt: '神户北野异人馆街的风见鸡馆' },
  { id: 'plaisir', name: 'Kobe Plaisir 三宫本店', city: '神户', category: '美食', lat: 34.694, lng: 135.194, address: '神户三宫', summary: '10 月 3 日已预约的神户牛铁板烧午餐' },
  { id: 'hakutsuru', name: '白鹤酒造资料馆', city: '神户', category: '景点', lat: 34.7128, lng: 135.2678, address: '神户市东滩区住吉南町4丁目', summary: '下午状态好时选择的酒藏开放日活动', tips: '这是可选路线，不是必达行程。', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hakutsuru_Sake_Brewery_Museum_2018_a.jpg?width=1280', imageAlt: '神户白鹤酒造资料馆外观' },
  { id: 'sannomiya', name: '三宫', city: '神户', category: '购物', lat: 34.694, lng: 135.1955, address: '神户市中央区三宫一带', summary: '休息路线中的购物、散步和咖啡区域' },
  { id: 'maiko', name: '舞子公园', city: '舞子', category: '景点', lat: 34.6316, lng: 135.0344, address: '神户市垂水区东舞子町', summary: '眺望濑户内海、淡路岛和明石海峡大桥', image: '/kansai-2026/trip-images/maiko-park.jpg', imageAlt: '舞子公园海边的明石海峡大桥' },
  { id: 'promenade', name: '舞子海上散步道', city: '舞子', category: '景点', lat: 34.6306, lng: 135.0335, address: '明石海峡大桥桥体内', summary: '在海面上方约 47 米处观看大桥结构和海景', tips: '室内景点不强制，以海边体验为主。' },
  { id: 'arima-stop', name: '有马温泉巴士站', city: '有马温泉', category: '交通', lat: 34.7965, lng: 135.2467, address: '神户市北区有马町', summary: '三宫高速巴士抵达点和酒店接驳点' },
  { id: 'arima-hotel', name: '有马格兰酒店', city: '有马温泉', category: '住宿', lat: 34.7996, lng: 135.2475, address: '神户市北区有马町1304-1', summary: '10 月 4 日入住，包含酒店会席料理与温泉体验', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arima_Grand_Hotel01s4s4272.jpg?width=1280', imageAlt: '有马格兰酒店外观与周边绿地' },
  { id: 'arima-town', name: '有马温泉街', city: '有马温泉', category: '景点', lat: 34.7973, lng: 135.2481, address: '神户市北区有马町', summary: '买伴手礼、喝咖啡和轻松散步的温泉小镇', image: '/kansai-2026/trip-images/arima-onsen.jpg', imageAlt: '有马温泉特产与伴手礼商店' },
  { id: 'umeda', name: '大阪梅田・阪急三番街', city: '大阪', category: '交通', lat: 34.7065, lng: 135.4983, address: '大阪市北区芝田1丁目', summary: '有马高速巴士抵达点' },
  { id: 'namba-hotel', name: '日和酒店大阪难波站前', city: '大阪', category: '住宿', lat: 34.6628, lng: 135.5015, address: '大阪市浪速区难波中3-1-2', summary: '10 月 5 日入住，靠近南海难波站' },
  { id: 'namba', name: '难波与心斋桥', city: '大阪', category: '购物', lat: 34.6705, lng: 135.5013, address: '大阪市中央区难波、心斋桥一带', summary: '购物、咖啡、晚餐和城市散步区域', image: '/kansai-2026/trip-images/shinsaibashi-shopping.jpg', imageAlt: '大阪道顿堀格力高广告牌与心斋桥购物区' },
  { id: 'pokemon-osaka-dx', name: 'Pokémon Center OSAKA DX', city: '大阪', category: '购物', lat: 34.6732, lng: 135.5013, address: '大丸心斋桥店 本馆 9F｜大阪府大阪市中央区心斋桥筋1-7-1', summary: '帮同事购买宝可梦卡牌的购物任务', website: 'https://www.pokemon.co.jp/shop/', image: '/kansai-2026/trip-images/daimaru-shinsaibashi.jpg', imageAlt: 'Pokémon Center OSAKA DX 所在的大丸心斋桥店外观' },
  { id: 'nankai-namba', name: '南海难波站', city: '大阪', category: '交通', lat: 34.6627, lng: 135.5022, address: '大阪市中央区难波5丁目', summary: '乘坐南海特急 Rapi:t 前往关西机场' },
]

export const itinerary: ItineraryItem[] = [
  { id: 'd1-0', dayId: 'd1', time: '06:00', title: '抵达北京首都机场 T3', placeId: 'pek', kind: '交通', note: '有托运行李，按计划提前 2 小时 45 分钟到达机场。' },
  { id: 'd1-1', dayId: 'd1', time: '06:00–06:45', title: '办理值机和托运行李', placeId: 'pek', kind: '交通', note: '国航国际航班柜台理论上于起飞前 60 分钟停止办理，请勿按截止时间到达。' },
  { id: 'd1-2', dayId: 'd1', time: '06:45–07:30', title: '安检与出境', placeId: 'pek', kind: '交通' },
  { id: 'd1-2a', dayId: 'd1', time: '07:30–08:10', title: '早餐或候机', placeId: 'pek', kind: '自由活动', note: '08:10 左右前往登机口。' },
  { id: 'd1-2b', dayId: 'd1', time: '08:45', title: '从首都机场 T3 起飞', placeId: 'pek', kind: '交通', note: '飞往关西国际机场；最终航班时间和航站楼应在出发前再次核验。' },
  { id: 'd1-2c', dayId: 'd1', time: '抵达后', title: '入境并领取行李', placeId: 'kix', kind: '交通', note: '抵达日本后按当地时间安排后续行程。' },
  { id: 'd1-2d', dayId: 'd1', time: '随后', title: 'KIX 前往神户美利坚公园', placeId: 'kix', kind: '交通' },
  { id: 'd1-3', dayId: 'd1', time: '15:00', title: '酒店入住、房间休息', placeId: 'kobe-hotel', kind: '住宿', showImage: true },
  { id: 'd1-4', dayId: 'd1', time: '下午', title: '港口轻松散步', placeId: 'meriken', kind: '景点' },
  { id: 'd1-5', dayId: 'd1', time: '17:30', title: 'ALL FLAGS 自助晚餐', placeId: 'all-flags', kind: '用餐', note: '已预约，17:30 开餐。' },
  { id: 'd1-6', dayId: 'd1', time: '晚上', title: '美利坚公园与神户港散步', placeId: 'meriken', kind: '景点', note: '早点休息，为第二天保留体力。' },

  { id: 'd2-1', dayId: 'd2', time: '08:00', title: '从酒店出发，打车前往早餐', placeId: 'nishimura', kind: '交通' },
  { id: 'd2-2', dayId: 'd2', time: '08:30–09:15', title: '西村咖啡中山手本店早餐', placeId: 'nishimura', kind: '用餐', note: '老神户咖啡馆，安排已确定。', showImage: true },
  { id: 'd2-3', dayId: 'd2', time: '09:30–10:50', title: '北野异人馆街散步', placeId: 'kitano', kind: '景点', note: '以老建筑和街区氛围为主，根据体力决定进入哪些建筑。', showImage: true },
  { id: 'd2-4', dayId: 'd2', time: '10:50', title: '打车前往 Kobe Plaisir', placeId: 'plaisir', kind: '交通' },
  { id: 'd2-5', dayId: 'd2', time: '11:30–13:15', title: 'Kobe Plaisir 神户牛午餐', placeId: 'plaisir', kind: '用餐', note: '已确认预约。' },
  { id: 'd2-6', dayId: 'd2', time: '13:15', title: '现场决定下午路线', kind: '自由活动', note: '根据全家状态选择 A 白鹤酒造，或 B 分组休息与三宫自由活动。' },
  { id: 'd2-7', dayId: 'd2', time: '17:30', title: '两条路线重新合流，安排晚餐', placeId: 'sannomiya', kind: '用餐', note: '优先选择靠近酒店的神户老派洋食，不安排中餐。' },
  { id: 'd2-8', dayId: 'd2', time: '晚餐后', title: '返回酒店附近观看神户港烟花', placeId: 'kobe-fireworks', kind: '景点', note: '看完烟花后不再安排其他活动。', showImage: true },
  { id: 'd2-9', dayId: 'd2', time: '19:30–20:30', title: '寄送大件行李', placeId: 'kobe-hotel', kind: '住宿', badge: '行动卡片 · 2 个行李箱', note: '10 月 4 日只带有马温泉一晚所需的小行李，10 月 5 日入住大阪酒店时取回大行李。', actionCard: { eyebrow: '寄送大件行李', chinese: '我要把两个大行李箱寄到 10 月 5 日入住的大阪酒店。酒店已经确认可以提前代收并保管。', japanese: ['10月5日に宿泊予定の大阪のホテルへ、スーツケース2個を宅配便で送りたいです。', '発送の手続きをお願いできますか？', '', 'ホテルには事前に確認済みで、チェックイン前に荷物を受け取って保管していただけます。', '', '送り先はこちらです。', '', '日和ホテル大阪なんば駅前', '〒556-0011', '大阪府大阪市浪速区難波中3-1-2', '', 'チェックイン日：2026年10月5日', 'スーツケースは2個です。', 'よろしくお願いします。'].join('\n') } },

  { id: 'd3-1', dayId: 'd3', time: '08:00–09:00', title: '酒店早餐，收拾一晚小行李', placeId: 'kobe-hotel', kind: '用餐' },
  { id: 'd3-2', dayId: 'd3', time: '09:00–09:15', title: '酒店退房', placeId: 'kobe-hotel', kind: '住宿' },
  { id: 'd3-3', dayId: 'd3', time: '09:15', title: '打车前往 JR 三宫站', kind: '交通' },
  { id: 'd3-4', dayId: 'd3', time: '约 09:45', title: 'JR 三宫前往 JR 舞子', placeId: 'maiko', kind: '交通', note: '选择停靠舞子站的 JR 神户线列车，实际车次按正式时刻表确认。' },
  { id: 'd3-5', dayId: 'd3', time: '10:10–11:35', title: '舞子公园海边散步', placeId: 'maiko', kind: '景点', note: '眺望濑户内海、淡路岛和明石海峡大桥。', showImage: true },
  { id: 'd3-6', dayId: 'd3', time: '约 10:20–11:10', title: '舞子海上散步道', placeId: 'promenade', kind: '景点', note: '进入大桥桥体看海景和结构；不强制安排其他室内景点。' },
  { id: 'd3-7', dayId: 'd3', time: '约 11:50', title: 'JR 舞子返回 JR 三宫', kind: '交通' },
  { id: 'd3-8', dayId: 'd3', time: '12:20–13:20', title: '三宫简单午餐', placeId: 'sannomiya', kind: '用餐', note: '乌冬、荞麦、寿司或洋食均可，为晚上的会席料理留胃口。' },
  { id: 'd3-9', dayId: 'd3', time: '13:20–13:45', title: '补充饮水并提前前往巴士站候车', kind: '自由活动' },
  { id: 'd3-10', dayId: 'd3', time: '14:20–14:50', title: '乘 Arima Express 317 前往有马温泉', placeId: 'arima-stop', kind: '交通', note: '已预订；4 人，座位 1C、1D、2C、2D。' },
  { id: 'd3-11', dayId: 'd3', time: '约 15:00', title: '抵达有马，乘酒店免费接驳车', placeId: 'arima-stop', kind: '交通' },
  { id: 'd3-12', dayId: 'd3', time: '15:30', title: '有马格兰酒店入住', placeId: 'arima-hotel', kind: '住宿', note: '预计到达时间已确定为 15:30。', showImage: true },
  { id: 'd3-13', dayId: 'd3', time: '约 16:00', title: '第一次泡温泉', placeId: 'arima-hotel', kind: '自由活动' },
  { id: 'd3-14', dayId: 'd3', time: '晚餐', title: '酒店会席料理', placeId: 'arima-hotel', kind: '用餐', note: '具体用餐时间以酒店安排为准。' },
  { id: 'd3-15', dayId: 'd3', time: '晚餐后', title: '第二次泡温泉，回房休息', placeId: 'arima-hotel', kind: '自由活动' },

  { id: 'd4-1', dayId: 'd4', time: '07:45–08:30', title: '早晨泡温泉', placeId: 'arima-hotel', kind: '自由活动' },
  { id: 'd4-2', dayId: 'd4', time: '08:30–09:30', title: '酒店早餐', placeId: 'arima-hotel', kind: '用餐' },
  { id: 'd4-3', dayId: 'd4', time: '09:30–10:30', title: '有马温泉街散步', placeId: 'arima-town', kind: '景点', note: '买伴手礼、喝咖啡，不安排正式景点。', showImage: true },
  { id: 'd4-4', dayId: 'd4', time: '10:45', title: '酒店退房', placeId: 'arima-hotel', kind: '住宿' },
  { id: 'd4-5', dayId: 'd4', time: '11:15', title: '乘酒店接驳车前往巴士站', placeId: 'arima-stop', kind: '交通' },
  { id: 'd4-6', dayId: 'd4', time: '11:30–12:25', title: '高速巴士前往大阪梅田', placeId: 'umeda', kind: '交通', note: '已预订；0005 班，4 人，座位 3C、3D、4C、4D。' },
  { id: 'd4-7', dayId: 'd4', time: '13:00', title: '从阪急三番街打车前往难波酒店', placeId: 'namba-hotel', kind: '交通' },
  { id: 'd4-8', dayId: 'd4', time: '约 13:30', title: '抵达酒店、寄存小行李并确认大行李', placeId: 'namba-hotel', kind: '住宿', note: '核对提前寄送的大行李是否已经到达；网页不保存订单资料。' },
  { id: 'd4-9', dayId: 'd4', time: '13:40–14:40', title: '难波附近午餐', placeId: 'namba', kind: '用餐', note: '不安排远距离移动。' },
  { id: 'd4-10', dayId: 'd4', time: '15:00', title: '酒店正式入住，简单休息', placeId: 'namba-hotel', kind: '住宿' },
  { id: 'd4-11', dayId: 'd4', time: '15:30–18:30', title: '难波至心斋桥方向购物', placeId: 'namba', kind: '自由活动', note: '以户外品牌、服装、商场和咖啡为主，不安排大阪城等传统景点。', showImage: true },
  { id: 'd4-11a', dayId: 'd4', time: '下午', title: 'Pokémon Center OSAKA DX', placeId: 'pokemon-osaka-dx', kind: '自由活动', badge: '任务 · 帮同事买宝可梦卡牌', note: '位于大丸心斋桥店本馆 9F；不加入 Pokémon Café，不安排用餐。', showImage: true },
  { id: 'd4-12', dayId: 'd4', time: '18:30–19:30', title: '难波或心斋桥晚餐', placeId: 'namba', kind: '用餐', note: '根据当天状态现场选择。' },
  { id: 'd4-13', dayId: 'd4', time: '20:00 后', title: '难波散步，回酒店整理行李', placeId: 'namba-hotel', kind: '自由活动', note: '早点休息。' },

  { id: 'd5-1', dayId: 'd5', time: '07:30–08:00', title: '自然起床', placeId: 'namba-hotel', kind: '自由活动' },
  { id: 'd5-2', dayId: 'd5', time: '08:00–08:40', title: '酒店附近或难波早餐', placeId: 'namba', kind: '用餐', note: '按 10:05 的已预订 Rapi:t 倒排时间，08:40 前结束早餐。' },
  { id: 'd5-3', dayId: 'd5', time: '08:40–09:15', title: '最后整理行李', placeId: 'namba-hotel', kind: '自由活动', note: '不再安排逛街，确认随身物品和全部行李。' },
  { id: 'd5-4', dayId: 'd5', time: '09:20', title: '酒店退房，取全部行李', placeId: 'namba-hotel', kind: '住宿', note: '步行前往距离很近的南海难波站。' },
  { id: 'd5-5', dayId: 'd5', time: '约 09:35', title: '抵达南海难波站', placeId: 'nankai-namba', kind: '交通', note: '前往南海特急 Rapi:t 乘车区域，预留约 30 分钟找站台和上车。' },
  { id: 'd5-6', dayId: 'd5', time: '10:05', title: '乘南海特急 Rapi:t 前往 KIX', placeId: 'kix', kind: '交通', note: '已预订，4 人；网页不保存票号或个人凭证。' },
  { id: 'd5-7', dayId: 'd5', time: '约 11:10–11:30', title: '抵达 KIX Terminal 1', placeId: 'kix', kind: '交通', note: '办理国际航班值机、托运、安检和出境。' },
  { id: 'd5-8', dayId: 'd5', time: '12:00–13:15', title: 'T1 免税店、午餐或咖啡', placeId: 'kix', kind: '自由活动', note: '之后前往登机口。' },
  { id: 'd5-9', dayId: 'd5', time: '约 13:20', title: '抵达登机口候机', placeId: 'kix', kind: '交通' },
  { id: 'd5-10', dayId: 'd5', time: '14:00', title: '从 KIX Terminal 1 起飞返回北京', placeId: 'kix', kind: '交通' },
]

export const decisionRoutes: DecisionRoute[] = [
  {
    id: 'route-a',
    label: '路线 A',
    title: '状态好：白鹤酒造开放日',
    condition: '全家体力和精神状态都不错时选择',
    items: [
      { id: 'a1', dayId: 'd2', time: '13:15', title: '从 Plaisir 打车前往白鹤酒造', placeId: 'hakutsuru', kind: '交通' },
      { id: 'a2', dayId: 'd2', time: '约 13:40', title: '抵达白鹤酒造', placeId: 'hakutsuru', kind: '景点', showImage: true },
      { id: 'a3', dayId: 'd2', time: '14:00', title: '观看传统酿酒歌表演', placeId: 'hakutsuru', kind: '景点' },
      { id: 'a4', dayId: 'd2', time: '14:20–15:30', title: '酒藏开放日自由体验', placeId: 'hakutsuru', kind: '自由活动', note: '看看酒厂、市集和亲子区域，不追求参加全部活动；疲劳时提前离开。' },
      { id: 'a5', dayId: 'd2', time: '15:30', title: '打车返回神户港酒店休息', placeId: 'kobe-hotel', kind: '交通' },
    ],
  },
  {
    id: 'route-b',
    label: '路线 B',
    title: '累了：分组休息与三宫自由活动',
    condition: '需要午睡或老人、孩子疲劳时选择',
    items: [
      { id: 'b1-route', dayId: 'd2', time: '13:15', title: '休息组打车返回酒店', placeId: 'kobe-hotel', kind: '交通' },
      { id: 'b2-route', dayId: 'd2', time: '13:30–16:00', title: '酒店午睡与休息', placeId: 'kobe-hotel', kind: '自由活动' },
      { id: 'b3-route', dayId: 'd2', time: '13:15–15:30', title: '自由组在三宫购物、散步和喝咖啡', placeId: 'sannomiya', kind: '自由活动', note: '不安排固定景点。' },
      { id: 'b4-route', dayId: 'd2', time: '约 15:30', title: '休息组出发与家人会合', placeId: 'sannomiya', kind: '自由活动' },
    ],
  },
]

export const bookings: Booking[] = [
  { id: 'bk0', type: '航班', title: '北京飞往关西国际机场', date: '2026-10-02', time: '08:45', location: '北京首都机场 T3 → 关西国际机场 KIX', status: '已确认', note: '有托运行李，计划 06:00 抵达首都机场；最终时刻和航站楼出发前再次核验。' },
  { id: 'bk1', type: '酒店', title: '神户美利坚公园东方大酒店', date: '2026-10-02', time: '15:00 入住', endTime: '2026-10-04', location: '神户美利坚公园', status: '已确认' },
  { id: 'bk2', type: '餐厅', title: 'ALL FLAGS 晚餐', date: '2026-10-02', time: '17:30', location: '神户酒店内', status: '已确认', note: '17:30 开餐。' },
  { id: 'bk3', type: '餐厅', title: 'Kobe Plaisir 神户牛午餐', date: '2026-10-03', time: '11:30', location: '神户三宫', status: '已确认' },
  { id: 'bk4', type: '活动', title: '白鹤酒造开放日', date: '2026-10-03', time: '14:00 起', location: '白鹤酒造资料馆', status: '待确认', note: '可选路线，只有全家状态良好时前往。' },
  { id: 'bk5', type: '活动', title: '大行李寄送至大阪酒店', date: '2026-10-03', time: '19:30–20:30', location: '神户酒店前台', status: '已确认', note: '大阪酒店已确认可以提前代收两个行李箱并保管至 10 月 5 日入住；寄件单需填写私人凭证中的预订姓名和入住日期。' },
  { id: 'bk6', type: '列车', title: 'JR 三宫前往舞子', date: '2026-10-04', time: '约 09:45', location: 'JR 三宫站 → JR 舞子站', status: '待确认', note: '选择停靠舞子站的列车，正式车次临行确认。' },
  { id: 'bk7', type: '活动', title: '舞子海上散步道', date: '2026-10-04', time: '约 10:20–11:10', location: '舞子公园', status: '待确认' },
  { id: 'bk8', type: '巴士', title: '三宫前往有马温泉高速巴士', date: '2026-10-04', time: '14:20–14:50', location: 'Sannomiya BT → Arima Onsen', reference: 'Arima Express 317', status: '已预订', note: '4 人；座位 1C、1D、2C、2D。' },
  { id: 'bk9', type: '酒店', title: '有马格兰酒店', date: '2026-10-04', time: '15:30 入住', endTime: '2026-10-05', location: '有马温泉', status: '已确认', note: '包含酒店会席料理。' },
  { id: 'bk10', type: '巴士', title: '有马温泉前往大阪梅田高速巴士', date: '2026-10-05', time: '11:30–12:25', location: '有马温泉 → 大阪梅田・阪急三番街', reference: '0005 班', status: '已预订', note: '4 人；座位 3C、3D、4C、4D。' },
  { id: 'bk11', type: '酒店', title: '日和酒店大阪难波站前', date: '2026-10-05', time: '15:00 入住', endTime: '2026-10-06', location: '大阪难波', status: '已确认', note: '已确认可在入住日前代收行李，并保管至 10 月 5 日入住时交付。' },
  { id: 'bk12', type: '列车', title: '南海特急 Rapi:t 前往关西机场', date: '2026-10-06', time: '10:05', location: '南海难波站 → KIX T1', status: '已预订', note: '4 人；指定席。网页不保存票号或个人凭证。' },
  { id: 'bk13', type: '航班', title: '关西机场飞往北京', date: '2026-10-06', time: '14:00', location: 'KIX Terminal 1 → 北京', status: '已确认' },
]

export const reminders: TripReminder[] = [
  { id: 'r1', date: '2026-10-03', title: '核对白鹤酒造开放日', timing: '出发前一周再次确认', priority: '一般', note: '确认活动日期、开放时间和当天内容；这是可选路线。' },
  { id: 'r3', date: '2026-10-04', title: '核对 JR 三宫—舞子列车', timing: '临近出发查看正式时刻表', priority: '一般', note: '必须选择停靠 JR 舞子站的列车。' },
  { id: 'r4', date: '2026-10-04', title: '核对舞子海上散步道', timing: '出发前一周确认', priority: '一般', note: '确认开放时间、临时休馆和现场购票方式。' },
]

export const guide: GuideEntry[] = [
  { id: 'g1', title: '时间与时区', category: '实用信息', summary: '航班时间按所在机场当地时间显示，日本境内行程使用日本时间。', details: ['10 月 2 日 06:00 到机场和 08:45 起飞为北京时间。', '日本使用 JST（UTC+9），比北京时间快 1 小时。', '列车和巴士实际班次应在临近出发时按正式时刻表确认。'] },
  { id: 'g2', title: '家庭旅行节奏', category: '实用信息', summary: '老人和孩子的状态优先于景点数量。', details: ['10 月 3 日下午根据体力选择路线。', '不追求全部打卡，疲劳时直接缩短或取消可选项目。', '跨城日只携带有马温泉一晚所需的小行李。'] },
  { id: 'g3', title: '交通提示', category: '交通', summary: '三段核心交通已预订，按页面时间提前候车。', details: ['JR 三宫前往舞子须选择停靠舞子站的列车。', '10 月 4 日三宫至有马温泉、10 月 5 日有马温泉至大阪梅田已预订。', '10 月 6 日南海 Rapi:t 指定席已预订。'] },
  { id: 'g4', title: '温泉小提示', category: '文化礼仪', summary: '进入浴池前先洗净身体，泡汤后及时补水。', details: ['毛巾不要放进浴池。', '如有身体不适，不要勉强久泡。', '酒店晚餐时间以现场安排为准。'] },
  { id: 'g5', title: '隐私与凭证', category: '购物', summary: '网页只承担行程提示，不承担出示凭证职责。', details: ['姓名、订单号、确认码、票号和证件资料不要放进网页。', '正式凭证保存在个人钱包或安全云盘。', '标记为待确认的项目不代表已经预约成功。'] },
]

export const placeById = new Map(places.map(place => [place.id, place]))
