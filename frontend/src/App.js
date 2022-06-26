
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import Home from './pages/Home';


function App() {
  document.title = 'APDS'
  return (
    <div className='app'>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </head>
      <Routes>
        <Route path={'/'} element={<Home />} />

        <Route path={'/admin'} element={<Admin />} />

        <Route path={'/shop'} element={<>Shop</>} />

        <Route path={'/user'} element={<>User</>} />
        <Route path='/user/orders' element={<>orders</>} />
        <Route path='/user/order' element={<>order</>} />
        <Route path='/user/order/confirm' element={<>confirm</>} />
        <Route path='/user/order/confirm/thanks' element={<>Thanks</>} />

        <Route path='*' element={<>404</>} />

      </Routes>
    </div>
  );
}

export default App;
