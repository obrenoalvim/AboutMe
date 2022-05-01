import './Header.css';

function Header() {
    return (
        <div className="Header">
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <div className="logo">
                    <span>
                        Breno
                        <strong>Alvim</strong>
                    </span>
                </div>
                <ul className="links">
                    <li>
                        <a href="#About">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#Jobs">
                            Jobs
                        </a>
                    </li>
                    <li>
                        <a href="#Skills">
                            Skills
                        </a>
                    </li>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav >
        </div >
    );
}

export default Header;
