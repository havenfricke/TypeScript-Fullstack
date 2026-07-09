import { Link } from "react-router-dom";
import { useAuth0, type User as Auth0User } from "@auth0/auth0-react";
import { useEffect } from "react";
import type User from "../Models/User";
import { AppState } from "../AppState";

// Maps Auth0's OIDC profile to domain model.
// Returns null when there's no stable identifier to key on.
function toUser(profile: Auth0User): User | null {
    if (!profile.sub) return null;
    return {
        auth0Id: profile.sub,
        email: profile.email ?? "",
        name: profile.name ?? "",
    };
}

export default function Navbar() {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated || !user) return;
        const me = toUser(user);
        if (!me) return;
        AppState.user = me;
        console.log("Modeled user:", AppState.user);
    }, [isAuthenticated, user]);

    return (
        <nav>
            <img id="logo" alt="logo" src="/logo.png"/>
            <Link to={""}><h3>Home</h3></Link>
            <Link to={"examples"}><h3>Examples</h3></Link>
            {isAuthenticated ? (
                <div className="log-in-out">
                    <p>Welcome, {AppState.user?.name}!</p>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button>
                </div>

            ) : (
                <div>
                    <button onClick={() => loginWithRedirect()}>
                        Log In
                    </button>
                </div>
            )}
        </nav>
    );
}