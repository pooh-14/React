import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth.Context";

function Home(){
    const {state,login,logout} = useContext(AuthContext);
    // console.log(state,"--state from context in home file");

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        if (state?.user) {
            setIsUserLoggedIn(true);
        }else {
            setIsUserLoggedIn(false);
        }
    },[state])

    // function logout() {
    //     localStorage.removeItem("Current-user");
    //     setIsUserLoggedIn(false);
    //     alert("Logout Successfull!.")
    // }

    // function addCart() {
    //     if (isUserLoggedIn) {

    //         alert("You are logged in can cart product")
    //     } else {
    //         alert("Please Log In First!")
    //     }
    // }

    return(
        // <>
        <div>
            <img style={{width:"1240px",marginLeft:"150px", marginTop:"50px"}} src='https://www.ninacosford.com/shop/wp-content/uploads/2020/10/ONLINE-SHOP-MAIN2.jpg'/>
            {isUserLoggedIn ? <button style={{marginLeft:"830px"}} onClick={()=>logout()}>Logout</button> : <button style={{marginLeft:"830px"}} onClick={() => router('/log')}>Login</button>}<br/>
            {/* <button style={{marginLeft:"415px"}} onClick={addCart}>Add to cart</button> */}
        </div>
        
           
           
        // </>
    );
}
export default Home;

