import { useContext } from "react";
import { Authcontext } from "../../../providers/Authprovider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(Authcontext)
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="text-center mb-4">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="  btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default SocialLogin;