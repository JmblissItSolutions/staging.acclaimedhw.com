
import './App.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/Home-Warranty.css';
import './assets/css/home.css';
import "./assets/css/contact.css";
import "./assets/css/makeclaim.css";
import "./assets/css/OrderNow.css";
import "./assets/css/Brochures.css";
import "./assets/css/MemberAdvantages.css";
import "./assets/css/Faq.css";
import "./assets/css/Contractors.css";
import "./assets/css/AboutUs.css";
import "./assets/css/plan.css";
import "./assets/css/BuyNow.css";
import "./assets/css/ChangeLocation.css";
import "./assets/css/Realstateplans.css";
import "./assets/css/Renewals.css";
import "./assets/css/PlansandPricing.css";
import "./assets/css/Cart.css";
import "./assets/css/landing.css"
import "./assets/css/landingvideo.css"
import { Route, Switch, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import HomeWarranty from "./Home-Warranty"
import Home from "./Home";
import Contact from "./Contact";
import MakeClaim from "./Make A Claim/MakeClaim";
import ClaimSubmission from "./Make A Claim/ClaimSubmission";
import OrderNow from "./OrderNow";
import MemberAdvantages from "./MemberAdvantages";
import Faq from "./Faq";
import Contractors from "./Contractors";
import AboutUs from "./AboutUs";
import Arizona from "./homeowner-plans/Arizona";
import Utah from "./homeowner-plans/Utah";
import Nevada from "./homeowner-plans/Nevada";
import Texas from "./homeowner-plans/Texas";
import Idaho from "./homeowner-plans/Idaho";
import CheckOut from "./homeowner-plans/CheckOut";
import Resource from "./Brochers/Resource";
import ResourceArizona from "./Brochers/ResourceArizona";
import ResourceNevada from "./Brochers/ResourceNevada";
import ResourceIdaho from "./Brochers/ResourceIdaho";
import ResourceTexas from "./Brochers/ResourceTexas";
import ResourceUtah from "./Brochers/ResourceUtah";
import SocialFollow from "./component/social-media-bar/SocialFollow";
import RealStateOrder from "./Realstate-plans/RealStateOrder";
import ArizonaHomeWarranty from "./landingpages/ArizonaHomeWarranty";
import IdahoHomeWarranty from "./landingpages/IdahoHomeWarranty";
import NevadaHomeWarranty from "./landingpages/NevadaHomeWarranty";
import TexasHomeWarranty from "./landingpages/TexasHomeWarranty";
import UtahHomeWarranty from "./landingpages/UtahHomeWarranty"
import HomeWarrantyProvider from "./HomeWarrantyProvider";
import MyAccount from "./MyAccount";
import PrivacyPolicy from "./PrivacyPolicy";
import Renewals from "./Renewals";
import Shop from "./Shop";
import Cart from "./Cart"
import Error from "./Error";
import Menu from "./Menu";
import { Footer, FooterBottom } from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderReceived from './homeowner-plans/Order-Received';

function App() {
  let location = useLocation();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []);
  const urlpath = location.pathname
  console.log(urlpath)
  return (
    <>
      {/* {
      location.pathname!=='/idaho-home-warranty' ? <SocialFollow/>:null
     }  */}

      {/* {
   (() => {
       if (urlpath !== '/idaho-home-warranty')
          return <span>One</span>
       if (urlpath !== '/utah-home-warranty')
          return <span>Two</span>
       else
          return <span>Three</span>
   })()
} */}
      {
        urlpath == '/idaho-home-warranty'
          ?
          null
          :
          urlpath == '/utah-home-warranty'
            ?
            null
            :
            urlpath == '/texas-home-warranty'
              ?
              null
              :
              urlpath == '/arizona-home-warranty'
                ?
                null
                :
                urlpath == '/nevada-home-warranty'
                  ?
                  null
                  :
                  <SocialFollow />
      }
      <div className="App">

      {
        urlpath == '/idaho-home-warranty'
          ?
          null
          :
          urlpath == '/utah-home-warranty'
            ?
            null
            :
            urlpath == '/texas-home-warranty'
              ?
              null
              :
              urlpath == '/arizona-home-warranty'
                ?
                null
                :
                urlpath == '/nevada-home-warranty'
                  ?
                  null
                  :
                  <header className={scroll ? "fixedHeader" : "staticHeader"}>
            <div className="container">
              <Menu />
            </div>
          </header>
      }

        <div className="pagecontent">
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/home-warranty" component={HomeWarranty} exact />
              <Route path="/order-now" component={OrderNow} exact />
              <Route path="/resources/arizona" component={ResourceArizona} exact />
              <Route path="/resources/arizona" component={ResourceArizona} exact />
              <Route path="/resources/nevada" component={ResourceNevada} exact />
              <Route path="/resources/idaho" component={ResourceIdaho} exact />
              <Route path="/resources/texas" component={ResourceTexas} exact />
              <Route path="/resources/Utah" component={ResourceUtah} exact />
              <Route path="/member-advantages" component={MemberAdvantages} exact />
              <Route path="/home-warranty-faqs" component={Faq} exact />
              <Route path="/contractors" component={Contractors} exact />
              <Route path="/about-us" component={AboutUs} exact />
              <Route path="/make-a-claim" component={MakeClaim} exact />
              <Route path="/make-a-claim/claim-submission" component={ClaimSubmission} exact />
              <Route path="/contact-us" component={Contact} exact />
              <Route path="/homeowner-plans/arizona" component={Arizona} exact />
              <Route path="/homeowner-plans/utah" component={Utah} exact />
              <Route path="/homeowner-plans/nevada" component={Nevada} exact />
              <Route path="/homeowner-plans/texas" component={Texas} exact />
              <Route path="/homeowner-plans/idaho" component={Idaho} exact />
              <Route path="/homeowner-plans/checkout" component={CheckOut} exact />
              <Route path="/real-estate-orders" component={RealStateOrder} exact />
              <Route path="/arizona-home-warranty" component={ArizonaHomeWarranty} exact />
              <Route path="/idaho-home-warranty" component={IdahoHomeWarranty} exact />
              <Route path="/nevada-home-warranty" component={NevadaHomeWarranty} exact />
              <Route path="/texas-home-warranty" component={TexasHomeWarranty} exact />
              <Route path="/utah-home-warranty" component={UtahHomeWarranty} exact />
              <Route path="/home_warranty_provider" component={HomeWarrantyProvider} exact />
              <Route path="/my-account" component={MyAccount} exact />
              <Route path="/privacy-policy" component={PrivacyPolicy} exact />
              <Route path="/renewals" component={Renewals} exact />
              <Route path="/shop" component={Shop} exact />
              <Route path="/cart" component={Cart} exact />
              <Route path="/homeowner-plans/checkout/order-received" component={OrderReceived} exact />
              <Route component={Error} />
            </Switch>
          </main>
        </div>
        
        {
        urlpath == '/idaho-home-warranty'
          ?
          null
          :
          urlpath == '/utah-home-warranty'
            ?
            null
            :
            urlpath == '/texas-home-warranty'
              ?
              null
              :
              urlpath == '/arizona-home-warranty'
                ?
                null
                :
                urlpath == '/nevada-home-warranty'
                  ?
                  null
                  :
                  <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                  <FooterBottom />
                </footer>
      }

      </div>
    </>
  );
}
export default App;
