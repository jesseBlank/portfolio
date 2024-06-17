import Home from './views/Home'
import Main from './views/Main'

import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App;