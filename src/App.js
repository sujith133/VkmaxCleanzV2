
import Navbar from './Components/Navbar/index';
import Service from './Components/Service/index';
import Home from './Components/Home/index';
import About from './Components/About/index';
import NotFound from './Components/NotFound/index';
import Contact from './Components/Contact/index';
import Footer from './Components/Footer/Index';
import SubServiceDetails from './Components/SubServiceDetails/index';
import SubService from './Components/SubService/index';
import { Routes,Route } from 'react-router-dom';


import './App.css';

function App() {
 

  return (
    <div className="bgContainer">
      <Navbar />
            
      <Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/aboutus" element={<About />} />
  <Route exact path="/service" element={<Service />} />
  <Route exact path="/service/:id" element={<SubService />} />
  <Route exact path="/service/subservices/:id" element={<SubServiceDetails />} />
  <Route exact path="/contacts" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>

      

      <Footer />
      
    </div>
  );
}

export default App;
