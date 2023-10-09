import { Route, Routes } from 'react-router-dom'
import  styles from './App.module.css'
import Home from './home/home'
import Navbar from './navbar/navbar'
import About from './about/about'
import Login from './login/login'
import Programas from './programas/programas'
import Galeria from './galeria/galeria'
import Tienda from './tienda/tienda'
import Blog from './blob/blob'
import Contacto from './contacto/contacto'
import Servicios from './servicios/servicios'

function App() {
  

  return (
   
      <div className={styles.app}>
       <Navbar />
        <Routes>
        
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/programas' element={<Programas />}  />
          <Route path='/galeria' element={<Galeria />}  />
          <Route path='/tienda' element={<Tienda />}  />
          <Route path='/blog' element={<Blog />}  />
          <Route path='/contacto' element={<Contacto />}  />
          <Route path='/servicios' element={<Servicios />}  />
          

        </Routes>
      </div>
    
  )
}

export default App
