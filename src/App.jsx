import Home from './views/Home'
import Main from './views/Main'
import Resume from './views/Resume'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter basename={"/porfolio"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;