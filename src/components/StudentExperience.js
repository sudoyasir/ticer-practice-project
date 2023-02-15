import img1 from '../img/student-experience.svg'

export default function StudentExperience(){
    return(<>
    
        <div className='container breating_space'>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img
                        src={img1}
                        className='w-50'
                    />
                </div>
                <div 
                className="col-md-6"
                style={{paddingRight:'8rem'}}
                >
                    <h2 
                    className='heading_font'
                    >
                        Build personalized <br/>student experience
                    </h2>

                    <p>Meet the needs of the modern student and drive outcomes with a student engagment platform that creats personal, mobile experiences that resonate throughout the students academic journey.</p>

                    <button className="btn btn-primary py-1 primary_btn mt-4">L E A R N&nbsp;&nbsp;N O W&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right" style={{fontSize:'20px'}}></i></button>
                </div>
            </div>
        </div>

    
    </>);
}