

function Logo() {
  return (
    <div>
      <a href="#">
        <div className="logo-wrap">
          <div 
            id="logo" 
            className='logo' 
            alt="Brand logo"
            >
            Brand
          </div>
        </div>
      </a> 
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        
        <button className="btn">Log In</button>
        <button className="btn">Sign Up</button>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <div className="h-container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header
