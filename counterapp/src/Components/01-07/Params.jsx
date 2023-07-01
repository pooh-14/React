import { useNavigate } from "react-router-dom";

function Params() {
    const router = useNavigate();
    function goto(){
        router('/singleproduct/GITHUB')
    }
    return (
        <div>
            <button onClick={goto}>Click to go somewhere...</button>
        </div>
    )
}

export default Params;
