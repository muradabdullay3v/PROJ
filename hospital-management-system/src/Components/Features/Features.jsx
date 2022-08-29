import "./../../assets/css/Features.css";

function Featuers() {
    return(
        <section id="features">
            <div className="custom_container">
                <div className="features_text">
                    <h2 className="features_text_title">Features</h2>
                    <p className="features_text_describtion">Why or system better than analogs?</p>
                </div>
                <div className="features_content">
                    <div className="features_cards">
                        <div className="features_cards-item">
                            <div className="features_icon_space">
                                <div className="features_icon">
                                <i class="fa-solid fa-bolt"></i>
                                </div>
                            </div>
                            <div className="features_card_text">
                                <h4>Performance</h4>
                                <p>Better performance is always necessary.
                                    Good optimization is key for performance.
                                    A minute can save a life.
                                </p>
                            </div>
                        </div>
                        <div className="features_cards-item">
                            <div className="features_icon_space">
                                <div className="features_icon">
                                <i class="fa-solid fa-brain"></i>
                                </div>
                            </div>
                            <div className="features_card_text">
                                <h4>Simple</h4>
                                <p>Our system is easy to understand.
                                    You can use it without any tutorials or trainings.
                                    So you can start to work right now.
                                </p>
                            </div>
                        </div>
                        <div className="features_cards-item">
                            <div className="features_icon_space">
                                <div className="features_icon">
                                <i class="fa-solid fa-palette"></i>
                                </div>
                            </div>
                            <div className="features_card_text">
                                <h4>Better Deisign</h4>
                                <p>Better performance is always necessary.
                                    Good optimization is key for performance.
                                    A minute can save a life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featuers;