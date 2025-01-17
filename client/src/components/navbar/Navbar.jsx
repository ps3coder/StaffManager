import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import LogoutButton from "../../routes/logout/logout";


function Navbar() {
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

    return (
        <nav>
            <div className="left">
                <span>ps3coder</span>
            </div>
            <div className="right">
                {currentUser ? (
                    <div className="user">
                        <span>{currentUser.email}</span>
                        <Link to="/profile" className="profile">
                            <span>Profile</span>
                        </Link>
                        <LogoutButton />
                    </div>

                ) : (
                    <>
                        <a href="/login">Sign in</a>
                        <a href="/register" className="register">
                            Sign up
                        </a>
                    </>
                )}

            </div>
        </nav>
    )
}
export default Navbar;

