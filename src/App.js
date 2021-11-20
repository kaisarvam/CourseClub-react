import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AllCourses from './components/AllCourses/AllCourses';
import DetailCourse from './components/DetailCourse/DetailCourse';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound'
import Gallery from './components/Gallery/Gallery';
import Faq from './components/Faq/Faq';
import {useState} from 'react';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [cart,setCart] = useState([]);

  const handleCart = (value)=>{
    if(cart){
      const NewValue = [...cart,value]
      setCart(NewValue);
    }else{
      setCart(value);
    }
    }
    
    console.log ("from App",cart);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header cart={cart}></Header>
      <Switch>

        <Route exact path="/">
       <Home></Home>
        </Route>
        <Route  path="/home">
       <Home handleCart={handleCart}></Home>
        </Route>
        <Route  path="/about">
       <AboutUs></AboutUs>
        </Route>
        <Route  path="/courses">
       <AllCourses handleCart={handleCart} ></AllCourses>
        </Route>
        <Route  path="/gallery">
       <Gallery></Gallery>
        </Route>
        <Route  path="/login">
       <Login></Login>
        </Route>
        <Route  path="/signup">
       <SignUp></SignUp>
        </Route>

        <Route  path="/faq">
       <Faq></Faq>
        </Route>

        <Route  path="/cart">
        <Cart cart={cart}></Cart>
        </Route>

        <Route  path="/course/:courseId">
       <DetailCourse></DetailCourse>
        </Route>

        <Route  path="*">
       <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
