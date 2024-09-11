
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './pages/AboutPage';
import ReviewPage from './pages/ReviewPage';
import ContactPage from './pages/ContactPage';


function App() {
 
  return (
    <div className="App">
            
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/review' element={<ReviewPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
