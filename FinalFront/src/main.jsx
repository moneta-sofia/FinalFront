import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import OdontoProvider from './Contexts/OdontoContext.jsx'

document.title ="Proyecto Odontologos"
// document. = 'https://img.icons8.com/cotton/64/tooth-enamel--v2.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <OdontoProvider>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-left" richColors expand={true} />
    </BrowserRouter>
  </OdontoProvider>
  // </React.StrictMode>,
)
