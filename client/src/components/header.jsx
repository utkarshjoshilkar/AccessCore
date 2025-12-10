import { assets } from '../assets/assets';

const Header = () => {
    
    return (
        <div className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-3" style={{minHeight: "80vh"}}>
            <img src={assets.logo} alt="logo" width={120} height={120} className="mb-3"/>
            <h5 className="fw-semibold">
                hey developer <span role="img" aria-label="wave">👋</span>
            </h5>
            <h1 className="fw-bold display-5 mb-3">Welcome to our product</h1>
            <p className="text-muted fs-5 mb-4" style={{maxWidth: "500px"}}>
                Lets start a quick product tour and you can setup the authentication in no time!
            </p>
            <button className="btn btn-outline-dark rounded-pill px-4 py-5">Get Started</button>
        </div>
    )
}

export default Header;