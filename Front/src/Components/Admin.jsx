import MainLayout from "./Dashboard/Layout/MainLayout";
import {Product, Read, Update} from "./index";
import {Route, Routes} from "react-router-dom";

const Admin = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path={"/"} element={<Read/>}/>
                <Route path={"update"} element={<Update/>}/>
                <Route path={"products"} element={<Product/>}/>
            </Routes>
        </MainLayout>
    )
}
export default Admin;