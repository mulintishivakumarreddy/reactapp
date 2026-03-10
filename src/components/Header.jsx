import "bootstrap/dist/css/bootstrap.min.css"

function Header(){
    return(
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                 <a className="navbar-brand" href="#">MyWebsite</a>

    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>

   </div>
  </nav>
    )
}
export default Header