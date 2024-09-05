import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";


const Main = () => {

    

    return (
        <div className="mx-auto px-20 ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;