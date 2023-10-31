import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../providers/Authprovider";

const Checkout = () => {
    const serviceData = useLoaderData()
    const {user} = useContext(Authcontext)
    const{_id,price,title,img} = serviceData;
    
    const handleCheckoutService = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service_title: title,
            service_id: _id,
            price: price,
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Service booked successfully..!')
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-4xl my-4">Book Service: {serviceData.title}</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleCheckoutService} className="card-body">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" name="price" defaultValue={'$'+serviceData.price} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Order Confirm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;