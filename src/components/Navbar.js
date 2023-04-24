import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1>
                    Ruby <i className="fab fa-react"></i>
                </h1>
                <ul>
                    <li>
                        <a>
                            <i className="fa-solid fa-house"></i>Home
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;