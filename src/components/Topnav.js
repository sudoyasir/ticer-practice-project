import Logo from '../img/ticer-logo.png'

export default function Topnav(){
    return(<>
    
        <div className="cotainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand" href="#" style={{width:'70px'}}><img className='w-100' src={Logo} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav_bar" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center ms-auto h5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Integrations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Admin Login</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success demo_btn" type="submit">GET A DEMO</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    
    </>);
}