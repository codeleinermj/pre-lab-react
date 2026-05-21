import "./Footer.css"

export const Footeer = () => {
    return (
        <footer>
            <p>Desarrollado por Leiner Mejias.</p>
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href="https://github.com/codeleinermj" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/leinermj/" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/leinermj" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};