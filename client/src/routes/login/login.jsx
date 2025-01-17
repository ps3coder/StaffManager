import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import "./login.css";


function Login() {
    const [error, setError] = useState("");
    const [IsLoading, setIsLoading] = useState(false);
    const { updateUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        // console.log(email, password);
        try {
            const res = await apiRequest.post("admin/login", { email, password }, { withCredentials: true });
            // console.log(res.data.email);
            updateUser(res.data.email);
            navigate("/home");
        } catch (error) {
            console.log(error)
            setError(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <input name="email" required type="text" placeholder="email" />
                    <input name="password" type="password" required placeholder="Password" />
                    <button disabled={IsLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
        </div>
    )
}
export default Login;
