import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <section className="max-w-screen-xl px-8 mx-auto " >
                

                {/* Outlet */}
                <Outlet />

                <Toaster/>

            </section>
        </div>
    );
};

export default MainLayout;