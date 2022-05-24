
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Shared/Footer';
import Home from './pages/Home/Home'


import Blog from './Blogs/Blog';
import Header from './pages/Shared/Header';
import AllProducts from './Allproducts/AllProducts';
import Login from './pages/Register/Login';
import Signup from './pages/Register/Signup';
import { Toaster } from 'react-hot-toast';
import Buypage from './pages/BuyPage/Buypage';
import Footer2 from './pages/Shared/Footer2';
import Review from './Review/Review';
import NotFound from './pages/Shared/NotFound';
import RequireAuth from './pages/Register/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import UserProfile from './pages/Dashboard/UserProfile';

//<Route path='' element={}></Route>
function App() {
  return (
    <div className="App">
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/buypage/:id' element={<Buypage></Buypage>}></Route>
       <Route path='/reviews' element={<RequireAuth><Review></Review></RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth> }>
          <Route index element={<MyOrders />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='user-profile' element={<UserProfile />}></Route>
        </Route>
      
     </Routes >
     <div className='sticky-footer mt-5'>
       {/* <Footer></Footer> */}
       <Footer2></Footer2>
     </div>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
