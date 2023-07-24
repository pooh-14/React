
    import { useContext, useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { AuthContext } from "../Context/Auth.Context";
    
    
    function Navbar() {
        const {state,login,logout} = useContext(AuthContext);
        // console.log(state,"--state from context in navbar file");

        const [user, setUser] = useState({});
        const router = useNavigate();
    
        useEffect(() => {
            const isUserPresent = JSON.parse(localStorage.getItem("Current-user"));
            if (state?.user){
                setUser(state?.user)
            }else{
                setUser({})
            }
        },[state])
    
    
        return (
            <div>
                {/* <h1>This is navbar</h1> */}
            <div style={{ display: 'flex', justifyContent: "space-around", border: "5px solid black", width: '100%', textAlign: "center" }}>
                <div style={{ width: "6%" , height:"6%"}}>
                    <img style={{ width: "100%" , height:"100%"}} 
                    onClick={() => router('/')} 
                    src="https://logo.com/image-cdn/images/kts928pd/production/2be3d80775372697cbfdb2796084d758744f2b48-396x386.png?w=640&q=72"/>
                </div>
                <div style={{ display: 'flex', width: "80%", justifyContent: "right", alignItems:"center" }}>
                    {user?.email ?
                        <>
                            <h3 onClick={() => router('/productsfrombackend')}>Products</h3>
                            <h3 onClick={() => router('/profile')} style={{ marginLeft: "40px" }}>Profile - {user?.name}</h3>
                            <h3 onClick={logout} style={{ marginLeft: "40px" }}>Logout </h3>
                            <h3 onClick={() => router('/cart')} style={{ marginLeft: "40px" }}>Cart</h3>
                        </>
                        :
                        <h3  onClick={() => router('/log')}>Login</h3>
                    }
                </div>
            </div>
            </div>
        )
    }
export default Navbar;