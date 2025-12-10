import { Outlet } from "react-router-dom";
import Nav from "./Nav";
function Layout() {
    return(
        <>
            <header>Aplikasi</header>
            <Nav />
            <main>
                 <Outlet />
            </main>
            <footer>&copy; 2025</footer>
           
        </>
    )
}
export default Layout;