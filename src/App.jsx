import Navbar from './Components/navBar';
import Footer from './Components/footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contactus';
import NoPage from './Pages/noPage';
function App(){
  return(
    <div className='dv'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;
  