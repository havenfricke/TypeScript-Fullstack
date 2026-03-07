import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to={""}>
                <h3>Home</h3>
            </Link>
            <Link to={"examples"}>
                <h3>Examples</h3>
            </Link>
        </nav>
    )
}