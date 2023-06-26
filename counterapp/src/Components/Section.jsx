import { useState } from "react";

function Section(){
   const[isUserLogged, setisUserLogged] = useState(true);
    return(
        <div>
            Section : { isUserLogged ? <button>Logout</button> : <button>Login</button>}
        </div>
    )
}
export default Section;