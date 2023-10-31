import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../providers/Authprovider';

const SignUp = () => {
    const {createUser } = useContext(Authcontext)
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            if(result.user.email){
                alert('Sign Up SuccessFully..!')
            }
        })
        .catch(error => console.log(error.message))
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left mr-12 ">
                    <img src={img} alt="" className='' />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign up" className="btn btn-primary" />
                        </div>
                    </form>
                    <p className="py-4 text-center font-bold">Already have an account <Link to='/login' className='text-orange-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;