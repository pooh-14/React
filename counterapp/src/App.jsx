import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom'
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Section from './Components/Section';
import Type1UseEffect from './Components/Type1UseEffect';
import Type2UseEffect from './Components/Type2UseEffect';
import Type3UseEffect from './Components/Type3UseEffect';
import Type4UseEffect from './Components/Type4UseEffect';
import Params from './Components/01-07/Params';
import SingleProduct from './Components/01-07/SingleProduct';
import Map from './Components/01-07/Map';
import Wrapper from './Components/01-07/Wrapper';
import DeclarativeWay from './Components/01-07/DeclarativeWay';
import {useState } from "react";
import StyledCompo from './Components/01-07/StyledCompo';
import DynamicStyles from './Components/04-07/DynamicStyles';
import DynamicClasses from './Components/04-07/DynamicClasses';
import ChildrenProp from './Components/04-07/ChildrenProp';
import FormOne from './Components/06-07/FormOne';
import FormSingleState from './Components/08-07/FormSingleState';
import Todos from './Components/08-07/Todos';
import UseCallback from './Components/08-07/UseCallback';
import ProductsFromBackend from './Components/11-07/ProductsFromBackend';
import UseMemo from './Components/09-07/UseMemo';
import UseReducer from './Components/09-07/UseReducer';


function App() {

  const [myUsers, setMyUsers] = useState(["Rahul", "Krishan", "Manoj"])

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={ <Home />} />
      <Route exact path='/wel' element={ <Welcome/>} />
      <Route exact path='/log' element={ <Login/>} />
      <Route exact path='/count' element={<Counter/>}/>
      <Route exact path='/sec' element={<Section/>}/>
      <Route exact path='/Type1UseEffect' element={<Type1UseEffect/>}/>
      <Route exact path='/Type2UseEffect' element={<Type2UseEffect/>}/>
      <Route exact path='/Type3UseEffect' element={<Type3UseEffect/>}/>
      <Route exact path='/Type4UseEffect' element={<Type4UseEffect/>}/>
      <Route exact path='/params' element={ <Params/>}/>
      <Route exact path='/singleproduct/:swaraj' element={<SingleProduct />} />
      <Route exact path='/map' element={ <Map myUsers={myUsers} setMyUsers={setMyUsers} myName={"Santosh"} kuchBhi={["rOCKY", "rAJ", "hOIHIBUI"]} />}/>
      <Route exact path='/wrapper' element={ <Wrapper/>}/>
      <Route exact path='/declarativeway' element={ <DeclarativeWay/>}/>
      <Route exact path='/styledcompo' element={ <StyledCompo/>}/>
      <Route exact path='/dynamicstyles' element={ <DynamicStyles />} />
      <Route exact path='/dynamicclasses' element={ <DynamicClasses />} />
      <Route exact path='/childrenprop' element={ <ChildrenProp />} />
      <Route exact path='/formone' element={<FormOne/>}/>
      <Route exact path='/formsinglestate' element={<FormSingleState/>}/>
      <Route exact path='/usecallback' element={<UseCallback/>}/>
      <Route exact path='/todos' element={<Todos/>}/>
      <Route exact path='/productsfrombackend' element={<ProductsFromBackend/>}/>
      <Route exact path='/usememo' element={<UseMemo/>}/>
      <Route exact path='/usereducer' element={<UseReducer/>}/>
      </Routes>
      <Footer/>
   </div>
  )
}

export default App;
