import { Link } from "react-router-dom";

function Nav() {
    const ulStyle = {
        listStyleType: "none",
        display: "flex",
        gap: "20px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
    };
    
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products"></Link>Products</li>
                <li><Link to="/contact"></Link>Contact</li>
                <li><Link to="/profile"></Link>Profile</li>
            </ul>
        </nav>
    )
}

export default Nav;