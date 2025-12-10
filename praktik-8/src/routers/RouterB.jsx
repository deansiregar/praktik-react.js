import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Products from "../pages/Product";
import Contact from "../pages/Contact";
import Nav from "../components/Nav";
import Layout from "../components/Layout";

function RouterB() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterB;
