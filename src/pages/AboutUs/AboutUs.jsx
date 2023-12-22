import Footer from "../../sharedComponents/Footer/Footer";
import Navbar from "../../sharedComponents/Navbar";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiHotelFill } from "react-icons/ri";


const AboutUs = () => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            <div
      className="max-w-7xl mx-auto flex gap-5  items-center px-5 flex-col md:flex-row"
    >
      <div className=" p-3 relative w-full md:w-2/5 lg:w-1/2 mr-12 ml-5 md:mr-0">
        <img src="https://i.ibb.co/r6fVVFp/banner.jpg" alt="" />
      </div>

      <div className="w-full md:w-3/5 lg:w-1/2 mt-6">
        <h3 className="text-dark-03 tracking-[5px] mb-3">
          WELCOME TO Fintask
        </h3>
        <h2 className="text-2xl text-dark-01 md:text-3xl lg:text-4xl font-medium mb-2">
          Task Management | Best Team Works
        </h2>
        <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
        <p className="text-dark-02 mb-8">
          Task Management | Best TeamWorks is your ultimate solution for streamlined collaboration and efficient project execution. Our web application redefines task management, offering a comprehensive suite of tools to enhance team productivity. From intuitive task assignment to detailed progress tracking, we provide a user-friendly platform that empowers teams to excel.
        </p>
        <div className="flex flex-wrap gap-6 md:gap-2 justify-between items-center mb-5 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <div className="text-[#7345b2] text-4xl">
              <BsGraphUpArrow/>
            </div>
            <div>
              <h4 className=" text-dark-01 font-medium mb-1">
                20 Years of Experience
              </h4>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-[#7345b2] text-5xl">
              <RiHotelFill/>
            </div>
            <div>
              <h4 className=" text-dark-01 font-medium mb-1">
                180+ Destinations
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>



            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutUs;