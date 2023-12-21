import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <section className="max-w-screen-xl px-8 mx-auto " >
                

                {/* Outlet */}
                <Outlet />

            </section>
        </div>
    );
};

export default MainLayout;