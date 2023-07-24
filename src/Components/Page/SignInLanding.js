import "../../CSS/SignInLanding.css";

export const SignInLanding = () => {
    return (
        <div className="desktop">
            <div className="div">
                <img className="img" alt="Img" src="https://generation-sessions.s3.amazonaws.com/b6b6068c21198b5044d90a6ebcc3b1c8/img/54b7b13a560d5d2c4c3ea48e92f32d9a-1.png" />
                <div className="overlap">
                    <h1 className="manage-your-XPNS">
                        <span className="text-wrapper">
                            Manage <br />
                            Your <br />
                        </span>
                        <span className="span">XPNS</span>
                        <span className="text-wrapper">&nbsp;</span>
                    </h1>
                    <div className="rectangle" />
                    <button className="text-wrapper-2">Login</button>
                </div>
                <div className="overlap-group">
                    <div className="ellipse" />
                    <div className="text-wrapper-3">HEADING</div>
                </div>
            </div>
        </div>
    );
};
