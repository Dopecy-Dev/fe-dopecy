import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

// auth
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp'
// import VerifyEmail from '../components/auth/VerifyEmailPage';
// import ForgotPassword from '../components/auth/ForgotPasswordPage';
// import ResetPassword from '../components/auth/ResetPasswordPage';

//user 
// import MarketPlace from '../pages/user/MarketPlace/index'
// import SellerStore from '../pages/user/SellerStore/index'
// import OwnProfile from '../pages/user/OwnProfile/index'
// import ProductDetail from '../pages/user/ProductDetail/index'
// import MyCart from '../pages/user/MyCart/index'
// import Favorite from '../pages/user/Favorite/index'
// import EmojiShop from '../pages/user/EmojiShop/index'
// import Event from '../pages/user/Event/index'
// import EventDetail from '../pages/user/EventDetail'
// import Club from '../pages/user/Club/index'
// import ClubDetail from '../pages/user/ClubDetail/index'
// import ClubChat from '../pages/user/ClubChat/index'
// import Chat from '../pages/user/Chat/index'
// import ProgressPathScreen from '../pages/user/ProgressPathScreen/index'
import LandingPage from '../pages/landingpage/LandingPage';

//seller
// import TermsAndConditions from '../pages/seller/TermsAndConditions/index'
// import BecomeSeller from '../pages/seller/BecomeSeller/index'
// import BecomeSellerUpload from '../pages/seller/BecomeSellerUpload/index'
// import OwnProfileSeller from '../pages/seller/OwnProfile/index'


// protected
import Protected from './Protected';

const Routers = () => {
    return (
        <Router>
            <Routes>
                {/* auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path='/verifyemail' element={<VerifyEmail />} /> */}
                {/* <Route path='/forgotpassword' element={<ForgotPassword />} /> */}
                {/* <Route path='/resetpassword' element={<ResetPassword />} /> */}
                {/* user */}
                <Route path="/" element={<Navigate replace to="/landingpage" />} />
                <Route path="/landingpage" element={<LandingPage />} />
                {/* <Route path="/marketplace" element={<Protected Component={MarketPlace} />} /> */}
                {/* <Route path="/sellerstore" element={<Protected Component={SellerStore} />} /> */}
                {/* <Route path="/ownprofile" element={<Protected Component={OwnProfile} />} /> */}
                {/* <Route path="/productdetail" element={<Protected Component={ProductDetail} />} /> */}
                {/* <Route path="/products/:productId" element={<Protected Component={ProductDetail} />} /> */}

                {/* <Route path="/mycart" element={<Protected Component={MyCart} />} /> */}
                {/* <Route path="/favorite" element={<Protected Component={Favorite} />} /> */}
                {/* <Route path="/emojishop" element={<Protected Component={EmojiShop} />} /> */}
                {/* <Route path="/events" element={<Protected Component={Event} />} /> */}
                {/* <Route path="/events/:eventId" element={<Protected Component={EventDetail} />} /> */}
                {/* <Route path="/club" element={<Protected Component={Club} />} /> */}
                {/* <Route path="/clubdetail" element={<Protected Component={ClubDetail} />} /> */}
                {/* <Route path="/clubchat" element={<Protected Component={ClubChat} />} /> */}
                {/* <Route path="/chat" element={<Protected Component={Chat} />} /> */}
                {/* <Route path="/progresspathscreen" element={<Protected Component={ProgressPathScreen} />} /> */}
                {/* seller */}
                {/* <Route path="/seller/termsandconditions" element={<TermsAndConditions />} /> */}
                {/* <Route path="/seller/becomeseller" element={<BecomeSeller />} /> */}
                {/* <Route path="/seller/becomesellerupload" element={<BecomeSellerUpload />} /> */}
                {/* <Route path="/seller/ownprofile" element={<Protected Component={OwnProfileSeller} />} /> */}
                <Route path="*" element={<h1>404 Not found</h1>} />
            </Routes>
        </Router>
    );
};

export default Routers;