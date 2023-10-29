import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='w-1/2 relative '>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute top-1/2 right-0 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 pl-14'>
                    <p className='mb-8 text-xl font-bold text-orange-500'>About Us</p>
                    <h2 className="text-5xl mb-8">We are qualified & of experience in this field</h2>
                    <p className='text-[#737373] mb-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-[#737373] mb-8 w-[490px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-active btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;