import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navbar";
import Bodysection from "./Components/Bodysection"
import Footer from "./Components/footer"
import Services from "./Components/services"
import SendMoney from './Components/sendMoney';
import { createBrowserHistory } from 'history';
import { Router,Route,Routes } from 'react-router-dom';
import ViewCustomer from './Components/ViewCustomer';
import { ToastContainer } from 'react-toastify';
import  ViewTranscation from './Components/ViewTranscation'
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();
function App() {
  return (

    <>
          
          <Navbar/>
          <ToastContainer position="top-center"/>
          <Routes>
              <Route path="/" element={<Bodysection/>}  />
              <Route path="/sendMoney" element={<SendMoney />} />
              <Route path="/view" element={<ViewCustomer />} />
              <Route path="/viewTrans" element={<ViewTranscation  />} />
          </Routes>
          
          <Footer/>
        
    </>
  );
}

export default App;