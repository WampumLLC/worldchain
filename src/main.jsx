import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App.jsx'
import EGovernment from './pages/EGovernment.jsx'
import ECommerce from './pages/ECommerce.jsx'
import Blockchain from './pages/Blockchain.jsx'
import Transformation from './pages/Transformation.jsx'
import Unicorns from './pages/Unicorns.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/egovernment" element={<EGovernment />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/unicorns" element={<Unicorns />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
