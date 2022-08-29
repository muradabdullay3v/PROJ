import { NavLink } from "react-router-dom";
import "../../assets/css/Welcome.css";
import Featuers from "../Features/Features";
import Join from "../Join/Join";

function Welcome() {
    return(
        <section id="welcome">
            <div className="custom_container">
                <div className="welcome_context">
                    <div className="welcome_summary">
                        <h2 className="welcome_title">Online Hospital Management</h2>
                        <h4>Manage your hospital and help people with our system</h4>
                        <NavLink className="welcome_learn_more" to="/system/patientstable">JOIN SYSTEM</NavLink>
                    </div>
                    <div className="welcome_image">
                        <img src="https://www.pngmart.com/files/21/Hospital-PNG.png" alt="image" className="welcome_image_item"/>
                    </div>
                </div>
            </div>
                <Featuers/>
                <Join/>
        </section>
    );
}

export default Welcome;