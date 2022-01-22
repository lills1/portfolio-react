function Header({ setStatus }) {
    return (
        <header>
            <h1>Lilly Stephenson</h1>
            <nav>
                <ul class="nav-bar">
                    <li>
                        <a onClick={() => setStatus('About')} href="#"> About</a>
                    </li>
                    <li>
                        <a onClick={() => setStatus('MyWorks')} href="#"> My works</a>
                    </li>
                    <li>
                        <a onClick={() => setStatus('Contact')} href="#"> Contact </a>
                    </li>
                    <li>
                    <a onClick={() => setStatus('Resume')} href="#"> Resume </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header