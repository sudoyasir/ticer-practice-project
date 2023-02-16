import '../Testomonials/Testomonials-style.css'


export default function Testomonials(){
    return(<>
    
        <div 
        className="container-fluid text-center breating_space grad"
        style={{padding:'5rem 0'}}
        >
            <h2 
            style={{fontFamily:'Acme'}}
            className='mb-5'
            >
                Meet our next gen student<br/>experience suit
            </h2>
            <div className='container'>


            <div class="row">
          <div class="col-md-4">
            <div class="card card_border2 shadow" style={{backgroundColor:'#ff646434', border:'0px'}}>
              <div className="mt-4">
                <i 
                class="fa fa-graduation-cap faicon2"
                style={{color:'#FF6464',backgroundColor:'#ff646459'}}
                >

                </i>
              </div>
              <div class="card-body px-4">
                <h5 class="card-title">Students Testomonials</h5>
                <p class="card-text gray_clr px-3">Feature stories or videos of current and past students who share their experiences, challenges, and achievements at the institution or program.</p>
                <a
                href="#"
                className="fw-bold"
                style={{textDecoration:'none', color:'#FF6464'}}
                >
                  Learn More <i class='fa fa-arrow-right bold ps-1'></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
             <div class="card card_border2 shadow" style={{backgroundColor:'#5d389136', border:'0px'}}>
              <div className="mt-4">
                <i 
                class="fa fa-connectdevelop faicon2"
                style={{color:'#5D3891',backgroundColor:'#5d389157'}}
                >

                </i>
              </div>
              <div class="card-body px-4">
                <h5 class="card-title">Career Development</h5>
                <p class="card-text gray_clr px-3">Offer resources for students to explore latest career paths and connect with employers, including job fairs, internships, and career counseling.</p>
                <a
                href="#"
                className="fw-bold"
                style={{textDecoration:'none', color:'#5D3891'}}
                >
                  Learn more <i class='fa fa-arrow-right bold ps-1'></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
             <div class="card card_border2 shadow" style={{backgroundColor:'#439a9736', border:'0px'}}>
              <div className="mt-4">
                <i 
                class="fa fa-diagram-project faicon2"
                style={{color:'#439A97',backgroundColor:'#439a975d'}}
                >

                </i>
              </div>
              <div class="card-body px-4">
                <h5 class="card-title">Alumni Network</h5>
                <p class="card-text gray_clr px-3">Showcase the accomplishments and experiences of alumni, as well as opportunities for current students to connect with alumni in fields of interest.</p>
                <a
                href="#"
                className="fw-bold"
                style={{textDecoration:'none', color:'#439A97'}}
                >
                  Learn More <i class='fa fa-arrow-right bold ps-1'></i>
                </a>
              </div>
            </div>
          </div>
        </div>


            </div>
        </div>

    </>)
}