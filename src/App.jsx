import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Compentes/Navbar'
import Home from './Pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='pages'>
    <Routes>

      <Route path='/'  element={  <Home/>}/>

      
    </Routes>
    </div>
    </BrowserRouter>
    

    
    </>
  )
}

export default App
