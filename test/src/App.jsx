import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import PracticeLogin from './PRACTICE/PracticeLogin';
import PracticeRegister from './PRACTICE/PracticeRegister';
import PracticeHome from './PRACTICE/PracticeHome';
import AllProducts from './PRACTICE/AllProducts';
import AddProducts from './PRACTICE/AddProducts';
import MyProfile from './PRACTICE/MyProfile';
import RefFocus from './PRACTICE/RefFocus';
import RefRender from './PRACTICE/RefRender';
import PracticeNavbar from './PRACTICE/PracticeNavbar';
import SingleProduct from './PRACTICE/SingleProduct';
import Cart from './PRACTICE/Cart';

function App() {
  return (
    <div>
      <PracticeNavbar/>
      <Routes>
      <Route exact path='/' element={<PracticeHome/>}/>
      <Route exact path='/practicelogin' element={<PracticeLogin/>}/>
      <Route exact path='/practiceregister' element={<PracticeRegister/>}/>
      <Route exact path='/allproducts' element={<AllProducts/>}/>
      <Route exact path='/addproducts' element={<AddProducts/>}/>
      <Route exact path='/myprofile' element={<MyProfile/>}/>
      <Route exact path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/reffocus' element={<RefFocus/>}/>
      <Route exact path='/refrender' element={<RefRender/>}/>
      </Routes>
    </div>
  );
}

export default App;
