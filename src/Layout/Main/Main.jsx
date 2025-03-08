import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const Main = () => {

    

    return (
        <div className="mx-auto px-20 ">
            <Header></Header>
            <Outlet className="mt-10"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;