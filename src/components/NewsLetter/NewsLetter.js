import img1 from '../NewsLetter/news-letter.svg'
import '../NewsLetter/NewsLetter-style.css'

export default function (){
    return(<>
        <div className='container breating_space'>
            <div className="row">
                <div 
                    className="col-md-6 div_left"
                    style={{paddingLeft:'8rem', paddingTop:'2.5rem'}}
                    >
                        <h2 
                        className=''
                        style={{fontSize:'50px'}}
                        >
                            Learn how <font className='fw-bolder' style={{color:'#6c63fe'}}>Ticer</font><br/>
                            can help you with<br/>
                            your bright future.
                            
                        </h2>


                            <div class="input-group mb-3  mt-5 gmail_div">
                                <input type="email" class="form-control" placeholder="Enter work email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn btn-outline-secondary" style={{backgroundColor:'#6c63fe', border:'#6c63fe', color:'white'}} type="button" id="button-addon2">Get a Demo</button>
                            </div>                
                        </div>

                    <div className="col-md-6 text-center img_section">
                        <img
                            src={img1}
                            className='w-75'
                        />
                    </div>
                </div>
            </div>
    </>);
}