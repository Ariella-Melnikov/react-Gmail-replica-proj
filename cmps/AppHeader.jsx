const { Link, NavLink } = ReactRouterDOM
export function AppHeader() {
    

    return <header className="app-header">
        <Link to="/mail/inbox">
        <img src="../assets/img/logos/gmail-logo-5.png" alt="logo" className='logo' />
        </Link>

    </header>
}
