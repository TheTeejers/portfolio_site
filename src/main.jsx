import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import ContentWindow from './components/ContentWindow.jsx'
import './styles/App.css'

const App = () => {
  const [contentSelected, setContentSelected] = useState('About');
  
  return (
    <>
      <Header contentSelected={contentSelected} setContentSelected={setContentSelected}/>
      <ContentWindow contentSelected={contentSelected} setContentSelected={setContentSelected} />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
