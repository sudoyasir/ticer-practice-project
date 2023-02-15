import img1 from '../img/social-media.png'
import img2 from '../img/web-development.png'
import img3 from '../img/graphic-designing.png'
import img4 from '../img/app-development.png'


export default function Courses(){
    return(<>
    
    <div className="container-fluid" style={{backgroundColor:'#f5f9fc'}}>

        <div className="container">

            <div className='row'>
            <div className="col-md-3 courses_sec text-center">
                    <div className='bg-white p-3 rounded-circle mx-auto shadow position-relative' style={{height:'80px', width:'80px'}}><img style={{width:'45px', position:'absolute'}} src={img1} /></div>
                    <p>Digital Marketing</p>
                </div>
                <div className="col-md-3 courses_sec text-center">
                <div className='bg-white p-3 rounded-circle mx-auto shadow position-relative' style={{height:'80px', width:'80px'}}><img style={{width:'45px', position:'absolute'}} src={img2} /></div>
                    <p>Web Development</p>
                </div>
                <div className="col-md-3 courses_sec text-center">
                <div className='bg-white p-3 rounded-circle mx-auto shadow position-relative' style={{height:'80px', width:'80px'}}><img style={{width:'45px', position:'absolute'}} src={img3} /></div>
                    <p>Graphic Designing</p>
                </div>
                <div className="col-md-3 courses_sec text-center">
                <div className='bg-white p-3 rounded-circle mx-auto shadow position-relative' style={{height:'80px', width:'80px'}}><img style={{width:'45px', position:'absolute'}} src={img4} /></div>
                    <p>Mobile App Development</p>
                </div>
            </div>

        </div>

    </div>
    
    </>);
}