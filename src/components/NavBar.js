import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="nav-bar">
        <Link className="vanlife" to='/' ><h1 style={{color: '#333'}}>#VANLIFE</h1></Link>     
      <div className="pages">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </section>
  );
}

export default NavBar;
