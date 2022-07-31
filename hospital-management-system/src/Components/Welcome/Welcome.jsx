import "../../assets/css/Welcome.css";

function Welcome() {
    return(
        <section id="welcome">
            <div className="custom_container">
                <div className="welcome_context">
                    <div className="welcome_summary">
                        <h2 className="welcome_title">Online Hospital Management</h2>
                        <h4>Manage your hospital and help people with our system</h4>
                        <a className="welcome_learn_more" href="#">JOIN SYSTEM</a>
                    </div>
                    <div className="welcome_image">
                        <img src="https://www.pngmart.com/files/21/Hospital-PNG.png" alt="image" className="welcome_image_item"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;