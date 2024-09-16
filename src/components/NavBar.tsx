

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
    <div className="container">
      <a className="navbar-brand" href="#Home" id="logo"><span>T</span>ravel</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#book">Book</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#packages">Packages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#about">About</a>
          </li>
          
        </ul>

       
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
