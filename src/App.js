
import './App.css';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Emp from './Component/Emp';
// import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/emp' element={<Emp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
