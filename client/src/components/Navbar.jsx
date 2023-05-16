import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <header>
            <div className="navbar">
                <NavLink to="/"><i className="fa fa-fw fa-home"></i>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </header>
    )
} 

export default Navbar 