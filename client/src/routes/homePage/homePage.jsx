import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <Link to="/staff">
                <button>Staff</button>
            </Link>
            <Link to="/department">
                <button>Department</button>
            </Link>
            <Link to="/role">
                <button>Role</button>
            </Link>
            <Link to="/attendence">
                <button>Attendence</button>
            </Link>
            <Link to="/leave">
                <button>Leave</button>
            </Link>
            <Link to="/payroll">
                <button>Payroll</button>
            </Link>
            <Link to="/performance">
                <button>Performance</button>
            </Link>
            <Link to="/notification">
                <button>Notifications</button>
            </Link>
        </div>
    );
}

export default HomePage;