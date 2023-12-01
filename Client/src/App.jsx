import { Route, Routes, useNavigate } from 'react-router-dom'
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
import { useEffect, useState } from 'react'

import axios from 'axios'
import Register from './register/register'
import Landing from './Landing'
import Footer from './footer/footer'

function App() {
  const [access, setAccess] = useState(() => {
    // Intentar obtener el valor de 'access' desde localStorage
    const storedAccess = localStorage.getItem("access");
    return storedAccess ? JSON.parse(storedAccess) : true; //cambiar a false
  });
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const navigate = useNavigate();

  const [connected, setConnected] = useState(true);

  useEffect(() => {
    // Establecer el tiempo en milisegundos (por ejemplo, 5000ms = 5 segundos)
    const timeToStayConnected = 60000 * 15;

    // Cuando el componente se monta, establecer la conexión en verdadero
    setConnected(true);

    // Después de un cierto tiempo, establecer la conexión en falso
    const timer = setTimeout(() => {
      setConnected(false);
      setAccess(false);
    }, timeToStayConnected);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigate]);

  async function register(input) {
    const { data } = await axios.post(
      "http://localhost:3001/user/create/",
      input
    );

    if (data.email && data.password) {
      setAccess(true);
      localStorage.setItem("access", JSON.stringify(true));
      return alert("Your user was registered");
    }
    return alert("Error change your dates");
  }

  async function login(input) {
    const { data } = await axios.post("http://localhost:3001/user/get/", input);
    
    if (data.user === "validated") {
      setAccess(true);
      setAccess(true);
      localStorage.setItem("access", JSON.stringify(true));
      navigate("/landing");
      return alert("Ingreso Correcto");
    }
    return alert("Corrige tus datos");
  }

  function logout() {
    setAccess(false);
    localStorage.setItem("access", JSON.stringify(false));
    navigate("/");
  }
  // Limpiar 'access' en localStorage cuando el componente se desmonta
  useEffect(() => {
    return () => localStorage.removeItem("access");
  }, []);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate, isRegisterVisible]);

  

  return (
   
      <div className={styles.app}>
       <Navbar logout={logout} />
        <Routes>
        <Route
          path="/register"
          element={
            <Register
              register={register}
              setRegisterVisible={setRegisterVisible}
            />
          }
         /> 
        {access ?  (
          <>
          <Route path='/home' element={<Home />}  />
          <Route path='/landing' element={<Landing connected={connected}/>}  />
          <Route path='/about' element={<About />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/programas' element={<Programas />}  />
          <Route path='/galeria' element={<Galeria />}  />
          <Route path='/tienda' element={<Tienda />}  />
          <Route path='/blog' element={<Blog />}  />
          <Route path='/contacto' element={<Contacto />}  />
          <Route path='/servicios' element={<Servicios />}  /> 
           
          </>
        ):
        <>
                    {isRegisterVisible && (
              <Route
                path="/"
                element={
                  <Register
                    register={register}
                    setRegisterVisible={setRegisterVisible}
                  />
                }
              />
            )}
            <Route
              path="/"
              element={
                <Login
                  login={login}
                  isRegisterVisible={isRegisterVisible}
                  setRegisterVisible={setRegisterVisible}
                />
              }
            />
        </>
      }

          

        </Routes>
        <Footer />
      </div>
    
     
  )
}

export default App