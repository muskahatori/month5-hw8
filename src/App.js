import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import DeadEnd from './DeadEnd';
import Treasure from './Treasure';
import EchoInput from './EchoInput';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dead-end' element={<DeadEnd />} />
        <Route path='/treasure' element={<Treasure />} />
        <Route path='/echo' element={<EchoInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
