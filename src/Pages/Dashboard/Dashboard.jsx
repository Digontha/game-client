import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-10 px-10">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full text-white text-2xl font-semibold bg-[#e3d7f455]" >
                        {/* Sidebar content here */}
                        <Link to="/dashboard"><li><a>Dashboard</a></li></Link>
                        <Link to="/dashboard/MyCart"><li><a>My Cart</a></li></Link>
                        <Link to="/"><li><a>Home</a></li></Link>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;