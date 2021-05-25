import { Link } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = ()=>{
    return(
        <div className="container">
            <div className="contentHolder">
                <div className="title">ADAM KENNEY</div>
                <div className="cubeContainer">
                    <div className="cube">
                        <div className="cube_face front" onClick></div>
                        <div className="cube_face back"></div>
                        <div className="cube_face right"></div>
                        <div className="cube_face left"></div>
                        <div className="cube_face top"></div>
                        <div className="cube_face bottom"></div>
                    </div>
                </div>
                <div className="buttonBox">
                    <Link to="/blog" style={{ textDecoration: 'none' }}>
                        <div className="buttons">Personal Blog</div>
                    </Link>
                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                        <div className="buttons">Resume</div>
                    </Link>
                    <Link to="/project" style={{ textDecoration: 'none' }}>
                        <div className="buttons">Projects</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default FrontPage;