import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav>
            <Link to={""}>
                <h3>Home</h3>
            </Link>
            <Link to={"examples"}>
                <h3>Examples</h3>
            </Link>
            {isAuthenticated ? (
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
            ) : (
                <button onClick={() => loginWithRedirect()}>
                    Log In
                </button>
            )}
        </nav>
    )
}