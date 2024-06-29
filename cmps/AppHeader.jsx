const { Link, NavLink } = ReactRouterDOM
import logo from "../assets/img/LOGOS/berlink-Gray.png"
export function AppHeader() {
    

    return <header className="app-header">
        <Link to="/">
        <img src="https://i.ibb.co/qFvdc4p/berlink-Gray.png" alt="" className='logo' />
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail/inbox">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
