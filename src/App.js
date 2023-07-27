import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Style/tabresponsive.css'
import './Style/laptop.css'
import './Style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/responsive.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import Home from './Layout/Home';
import Footer from './Components/Footer/Footer';
import Whoweare from './Layout/Whoweare';
import Governance from './Layout/Governance';
import BuyNow from './Layout/BuyNow';
import SideBar from './Layout/SideBar';
import SingleNewsPage from './Layout/SingleNewsPage';
import Newsevent from "../src/Layout/Newsnevents"
import ProductsSavings from './Layout/ProductsSavings';






function App() {
  const [change, setChange] = useState(true);
  const [userIsMobile, setUserIsMobile] = useState(true);
  useEffect(() => {
    window.innerWidth < 520 ? setUserIsMobile(true) : setUserIsMobile(false);

  }, [userIsMobile]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back'
    });
  }, [])





  return (
    <React.Fragment>


          <Fragment>
            {loading ? <Loader /> :
              <>


                <BrowserRouter>
                  <Header change={change} setChange={setChange}/>
                  <Routes>
                    <Route path='/' exact element={<Home change={change} setChange={setChange} />} />
                    <Route path='/whoweare' exact element={<Whoweare change={change} setChange={setChange} />} />
                    <Route path='/governance' exact element={<Governance />} />
                    <Route path='/buynow' exact element={<BuyNow />} />
                    <Route path='/sidebar' exact element={<SideBar change={change} setChange={setChange}  />} />
                    <Route path='/newsnevents' exact element={<Newsevent />} />
                    <Route path='/news/:heading' exact element={<SingleNewsPage />} />
                    <Route path='/products' exact element={<ProductsSavings />} />


                  </Routes>
                  <Footer />
                </BrowserRouter>


              </>
            }
          </Fragment>

    

    </React.Fragment>
  );
}

export default App;