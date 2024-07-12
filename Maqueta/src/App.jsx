
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/home/HomePage'
import NewPage from './pages/newPage/NewPage'
import Page2 from './pages/page2/Page2'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App () {

  return(
    <BrowserRouter>
      <header>
          <Link className='p-2' to="/" >
            HomePage
          </Link>
          <Link className='p-2' to="/NewPage" >
            NewPage
          </Link>
          <Link className='p-2' to="/Page2">
            Page2
          </Link>
          
        </header>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/NewPage' element={<NewPage/>}/>
            <Route path='/Page2' element={<Page2/>} />
          </Routes>
      
          
    </BrowserRouter>
  )
}
export default App
