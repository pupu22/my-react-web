import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Navigation from './compounts/navigation';
import ExpandCards from './pages/expandCards'


function App() {

  return (
    <div className='App'>
      <header>
        <Navigation></Navigation>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expandCards" element={<ExpandCards/>} />
        <Route path="/contact" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
