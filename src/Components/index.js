import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function Layout(){
    return(
        <>
        <Header />
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
        </>
    )
}

export default Layout;