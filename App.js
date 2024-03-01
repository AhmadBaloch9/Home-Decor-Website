import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Shop from './Components/Shop'
import News from './Components/News'
import Contact from './Components/Contact'
import Search from './Components/Search'
import Home from './Components/Home'
import './App.css';


function App() {
   
  return (
  
    <div className="App">
 <BrowserRouter>
  <Routes>
  <Route path="/home" element= {<Home/>}/>
    <Route path="/shop" element= {<Shop/>}/>
    <Route path="/news" element= {<News/>}/>
    <Route path="/contact" element= {<Contact/>}/>
    <Route path='/*' element={<Home/>}/>
  </Routes>
 </BrowserRouter>
    
    </div>
  );
}

export default App;
