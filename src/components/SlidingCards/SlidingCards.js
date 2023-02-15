import '../SlidingCards/SlidingCards-style.css'

export default function SlidingCards(){
    return(<>
    
    <div class="container my-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card card_border" style={{backgroundColor:'#faf0d7', border:'0px'}}>
              <div>
                <i 
                class="fa fa-trophy faicon"
                style={{color:'#fec938',backgroundColor:'#fbe7b2'}}
                >

                </i>
              </div>
              <div class="card-body px-4">
                <h5 class="card-title">Gamification</h5>
                <p class="card-text gray_clr px-3">Add gamification elements, such as badges, achievements, and leaderboards, to make learning more engaging and fun.</p>
                <a
                href="#"
                className="fw-bold"
                style={{textDecoration:'none', color:'#fec938'}}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
             <div class="card card_border" style={{backgroundColor:'#dce3f3', border:'0px'}}>
              <div>
                <i 
                class="fa fa-lightbulb faicon"
                style={{color:'#4c83f2',backgroundColor:'#b5cbf2'}}
                >

                </i>
              </div>
              <div class="card-body px-4">
                <h5 class="card-title">Personalized learning</h5>
                <p class="card-text gray_clr px-3">Use machine learning algorithms to personalize the learning experience for each student.</p>
                <a
                href="#"
                className="fw-bold"
                style={{textDecoration:'none', color:'#4c83f2'}}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
             <div class="card card_border" style={{backgroundColor:'#b8e2ca80', border:'0px'}}>
              <div>
                <i 
                class="fa fa-laptop-code faicon"
                style={{color:'#4ebc86',backgroundColor:'#b8e2ca'}}
                >

                </i>
              </div>
              <div class="card-body px-4">
                <h5 class="card-title">Live coding sessions</h5>
                <p class="card-text gray_clr px-3">Offer live coding sessions where learners can watch experienced coders solve real-world coding problems and ask questions.</p>
                <a
                href="#"
                className="fw-bold"
                style={{textDecoration:'none', color:'#4ebc86'}}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>)
}