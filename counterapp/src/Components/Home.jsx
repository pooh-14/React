import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "usr")
        if (user) {
            setIsUserLoggedIn(true);
        }
    }, [])

    function logout() {
        localStorage.removeItem("Current-user");
        setIsUserLoggedIn(false);
        alert("Logout Successfull!.")
    }

    function addCart() {
        if (isUserLoggedIn) {

            alert("You are logged in can cart product")
        } else {
            alert("Please Log In First!")
        }
    }

    return(
        <>
        <div>
            <h1 style={{marginLeft:"400px"}}>TADA!!</h1>
            <img style={{width:"240px",marginLeft:"340px"}} src='https://www.pngkit.com/png/detail/165-1650218_at-the-movies-will-smith-meme-tada.png'/>
        </div>
        {isUserLoggedIn ? <button style={{marginLeft:"430px"}} onClick={logout}>Logout</button> : <button style={{marginLeft:"430px"}} onClick={() => router('/log')}>Login</button>}<br/>
            <button style={{marginLeft:"415px"}} onClick={addCart}>Add to cart</button>
        </>
    );
}
export default Home;

