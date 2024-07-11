
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/home/HomePage'
import { useState } from 'react'

const Home = () => <h1>Home page</h1>
const NewPage = () => <h1>New page</h1>

function App () {
  const [page, setPage] = useState(()=>{
    const {pathname} = window.location
    const page = pathname.slice(1)
    return page
  })

  const getContent = () =>{
    if (page === 'NewPage') {
      return <NewPage/>
    }else if(page === 'Home'){
      return <Home/>
    }
  }

  const toPage = page => event => {
    event.preventDefault()
    window.history.pushState(null, '', `/${page}`)
    console.log(page);
    setPage(page)
  }

  return(
    <div>
      <header>
        <a className='p-2' href="#" onClick={(toPage('Home'))}>
          Home
        </a>
        <a className='p-2' href="#" onClick={(toPage('NewPage'))}>
          New Page
        </a>
        
      </header>
    {getContent()}
    </div>
  )
}
export default App
