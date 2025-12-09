import { assets } from '../assets/assets';

const Menubar = () => {
    return (
        <nav className= "navbar bg-white px-5 px-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
                <img src={assets.logo} alt="logo" width={32} height={32} />
                <span className="fw-bold fs-4 text-dark">AccessCore</span>
            </div>
        </nav>
    )
}

export default Menubar;