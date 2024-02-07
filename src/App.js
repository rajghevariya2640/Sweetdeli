import SignIn from './SignIn';
import theme from './Components/Theme';
import SignUp from './SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import './App.css';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import { ThemeProvider } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';
import PaymentComplete from './Pages/PaymentComplete/PaymentComplete';
import Faq from './Pages/FAQ/Faq';
import Personal from './Pages/Personal/Personal';
import PersonalInfo from './Pages/Personal/PersonalInfo/PersonalInfo';
import LogSecurity from './Pages/Personal/LogSecurity/LogSecurity';
import MyPayment from './Pages/Personal/MyPayment/MyPayment';
import MyOrder from './Pages/Personal/MyOrder/MyOrder';
import Gallary from './Pages/Gallary/Gallary';
import ContactUs from './Pages/ContactUs.js/ContactUs';
import Blog from './Pages/Bolg/Blog';
import SingleBlog from './Pages/SingleBlog/SingleBlog';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/single-blog' element={<SingleBlog />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/product-info' element={<ProductInfo />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/payment-complete' element={<PaymentComplete />} />
            <Route path='/personal' element={<Personal />} >
              <Route path='personal-info' element={<PersonalInfo />} />
              <Route path='login-security' element={<LogSecurity />} /> 
              <Route path='my-payment' element={<MyPayment />} /> 
              <Route path='my-order' element={<MyOrder />} /> 
            </Route>
            <Route path='/faq' element={<Faq />} />
            <Route path='/gallery' element={<Gallary />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
