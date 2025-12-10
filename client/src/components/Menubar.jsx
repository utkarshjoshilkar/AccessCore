import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
    const navigate = useNavigate();
    return (
        <nav className= "navbar bg-white px-5 px-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
                <img src={assets.logo} alt="logo" width={32} height={32} />
                <span className="fw-bold fs-4 text-dark">AccessCore</span>
            </div>
            <div className="btn btn-outline-dark rounded-pill px-3" onClick={() => navigate('/login')}>
                Login <i className="bi bi-arrow-right"></i>
            </div>
        </nav>
    )
}

export default Menubar;