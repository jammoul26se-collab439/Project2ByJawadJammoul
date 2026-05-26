import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link className="navbar-brand" to="/">
        Aska Company
      </Link>

      <div className="navbar-nav">

        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/about">
          About
        </Link>

        <Link className="nav-link" to="/apply">
          Apply
        </Link>

        <Link className="nav-link" to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  )
}

export default Navbar