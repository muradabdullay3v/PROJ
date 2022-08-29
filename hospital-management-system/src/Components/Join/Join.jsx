import { NavLink } from "react-router-dom";
import "../../assets/css/Join.css"

function Join() {
    return(
        <section id="join">
            <div className="custom_container">
                <div className="join_content">
                    <div className="join_text">
                        <h2>Join System</h2>
                        <p>Register to our system</p>
                    </div>
                    <div className="join_button">
                        <NavLink to="/system/patientstable" className="join_btn">Join</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Join;