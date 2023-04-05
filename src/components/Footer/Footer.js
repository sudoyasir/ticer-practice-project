import '../Footer/Footer.css'
import Logo from '../Footer/ticer-logo.png'



function Footer(){
    return(<>
    
   <div className='container-fluid text-light py-5' style={{backgroundColor:'#212832'}}>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 ps-5'>
                <img 
                className='mb-4 w-25'
                src={Logo} 
                />
                <h2 className='heading_txt'>Take  student experience <br/>to the next level </h2>

                <ul className='social_icons'>
                <li><a href='#' className='rounded-circle'><i className='fa fa-facebook'></i></a></li>
                <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                <li><a href='#'><i className='fa fa-instagram'></i></a></li>
                <li><a href='#'><i className='fa fa-youtube'></i></a></li>
                <li><a href='#'><i className='fa fa-globe'></i></a></li>
                <li><a href='#'><i className='fa fa-github'></i></a></li>
                </ul>
            </div>


            <div className='col-md-3 px-5'>
                <h3 >Quick Links</h3>
                    <ul className='list1'>
                    <li><a href='#'><i className='fa fa-angle-right'></i> Products</a></li>
                    <li><a href='#'><i className='fa fa-angle-right'></i> Integrations</a></li>
                    <li><a href='#'><i className='fa fa-angle-right'></i> Blog</a></li>
                    <li><a href='#'><i className='fa fa-angle-right'></i> Admin Login</a></li>
                    </ul>
            </div>


            <div className='col-md-3 px-5'>
                    <h3>Secondry Links</h3>
                    <ul className='list1'>
                        <li><a href='#'><i className='fa fa-angle-right'></i> Admin Login</a></li>
                        <li><a href='#'><i className='fa fa-angle-right'></i> Admin Login</a></li>
                        <li><a href='#'><i className='fa fa-angle-right'></i> Admin Login</a></li>
                    </ul>
                    <h3>hello word</h3>

            </div>
    </div>
        </div>
   </div>

    
    </>);
}
export default Footer;