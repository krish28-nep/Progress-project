import Home from './Home.tsx'
import Navbar from './Navbar.tsx'
import './App.css'

const App:React.FC=()=> {

  return (
    <>
    <Navbar/>
    <div className='container'>
    <Home/>

    </div>
    </>
  )
}

export default App
