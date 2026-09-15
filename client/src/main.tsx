import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router'
import KansaiApp from './KansaiApp'
// Self-hosted Poppins (bundled, same-origin) so the app font can't be blocked by
// ad/tracker blockers the way the Google Fonts CDN can.
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
// 中文标题优先使用系统宋体，西文标题使用随应用打包的衬线字体。
import '@fontsource/eb-garamond/500.css'
import '@fontsource/eb-garamond/600.css'
// 地图样式随应用一起打包，支持 PWA 离线缓存。
import 'leaflet/dist/leaflet.css'
import './kansai.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <KansaiApp />
    </HashRouter>
  </React.StrictMode>,
)
