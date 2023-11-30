import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import { Profile } from './Profile';
import { AuthData } from './auth/AuthWrapper';
import Checkout from './Pages/Checkout';
import ThankYouPage from './Pages/Thankyou';
import Shop from './Pages/Shop';

function App() {
  const { user } = AuthData();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thankyou" element={<ThankYouPage />} />

        <Route path="/profile" element={
          user.isAuthenticated ? <Profile /> : <Login redirect='profile' />
        } />
        <Route path="/checkout" element={
          user.isAuthenticated ? <Checkout /> : <Login redirect='checkout' />
        } />

        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div>
  );
}


export default App;
