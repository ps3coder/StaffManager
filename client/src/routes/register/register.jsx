import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import './register.css';

function Register() {
    const [error, setError] = useState("");
    const [IsLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target);

        const first_name = formData.get("first_name");
        const last_name = formData.get("last_name");
        const email = formData.get("email");
        const phone_number = formData.get("phone_number");
        const password = formData.get("password");
        const role = formData.get("role");
        const profile_picture = formData.get("profile_picture");
        const gender = formData.get("gender");
        const status = formData.get("status");

        // console.log({
        //     first_name,
        //     last_name,
        //     email,
        //     phone_number,
        //     password,
        //     role,
        //     profile_picture,
        //     gender,
        //     status,
        // });

        try {
            const res = await apiRequest.post("admin/add", {
                first_name,
                last_name,
                email,
                phone_number,
                password,
                role,
                profile_picture,
                gender,
                status,
            }, { withCredentials: true });
            console.log(res);
            navigate("/login");
        } catch (error) {
            console.log(error)
            setError(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="register-container">
            <h2>Admin Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input id="first_name" type="text" name="first_name" required />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input id="last_name" type="text" name="last_name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input id="phone_number" type="text" name="phone_number" required />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" required>
                        <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                        <option value="HR_ADMIN">HR_ADMIN</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="profile_picture">Profile Picture URL:</label>
                    <input id="profile_picture" type="text" name="profile_picture" />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status" required>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                        <option value="SUSPENDED">Suspended</option>
                        <option value="ON_LEAVE">On Leave</option>
                        <option value="ON_TRAINING">On Training</option>
                        <option value="TERMINATED">Terminated</option>
                    </select>
                </div>
                <button disabled={IsLoading}>
                    {IsLoading ? "Submitting..." : "Register"}
                </button>
                {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                <Link to="/login">Do you have an account?</Link>
            </form>
        </div>
    );
}

export default Register;
