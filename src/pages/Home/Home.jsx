import { Link } from "react-router-dom";
import Footer from "../../sharedComponents/Footer/Footer";
import Navbar from "../../sharedComponents/Navbar";
import TargetAudienceSection from "../../components/TargetAudienceSection/TargetAudienceSection";

const Home = () => {
    
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* home section */}
            <div className="h-[400px] border-2 border-[#f5f5f5]  bg-[#f5f5f5]" >

            <h2 className="text-[#000000] text-center text-3xl md:text-4xl font-bold mt-20" >Manage Your Task</h2>

            <h2 className="text-[#fc6a47] text-center text-xl font-bold " >Improve Your Productivity</h2>

            {/* */}

            <h2 className="text-[#bababa ] text-center text-lg mt-8" >Plan projects, stay on track, and deliver on time without <br />overworking your team.</h2>

            <div className="text-center mt-5" >
           <Link to="/dashboard" >
           <button className="bg-[#975cec] hover:bg-[#7345b2] hover:transition-all hover:duration-1000 hover:ease-in px-6 py-2 text-white rounded-full" >Let&#39;s Explore</button>
           </Link>
            </div>

            </div>

            {/* Target audience section */}
            <TargetAudienceSection/>

            {/* Footer */}
            <Footer/>

        </div>
    );
};

export default Home;