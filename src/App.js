 import './App.css';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './component/Login';
import Footer from './component/Footer';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Courses from './component/Courses';
import Gallery from './component/Gallery';
import OnlineRegistration from './component/OnlineRegistration';
import TrainingAndPlacement from './component/TrainingAndPlacement';
import Navbar from './component/Navbar';
import Home from './component/Home';
import BbaHospitality from './component/BbaHospitality';
 



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/OnlineRegistration' element={<OnlineRegistration/>}/>
        <Route path='/TrainingAndPlacement' element={<TrainingAndPlacement/>}/>
        <Route path='/BbaHospitality' element={<BbaHospitality/>}/>
         
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
