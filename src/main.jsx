import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import ContentWindow from './components/ContentWindow.jsx'

const contentSelectedState = useState('');
const setContentSelectedState = useState(contentSelectedState);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ContentWindow />
    {/* <App /> */}
    
    
  </StrictMode>,
)
