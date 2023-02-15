import Logo from '../img/ticer-logo.png'

export default function Topnav(){
    return(<>
    
        <div className="cotainer">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
    <a class="navbar-brand" href="#" style={{width:'70px'}}><img className='w-100' src={Logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav_bar" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center ms-auto h5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Integrations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Admin Login</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success demo_btn" type="submit">GET A DEMO</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    
    </>);
}