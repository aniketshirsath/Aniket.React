import React from 'react';

function Content() {
  return (
    <div>
      <section className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1 style={{fontSize:50}}>Brand Salman Khan</h1>
            <p style={{textAlign: 'justify', lineHeight:'2'}}>
              Founded by the fitness enthusiast Salman Khan himself, SK-27 strives to provide affordable gyms with extensive expertise and state-of the art equipment. With the highest fan following as the fitness icon, Salman Khan inspires a wide range of audience with more people opting to become healthier & fitter.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="https://www.beingstrong.in/images/the-brand.jpg" alt="Brand Salman Khan" className="img-fluid"/>
          </div>
        </div>
      </section>

      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Services</h2>
            <p>We offer a range of services to meet your fitness needs</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src="https://activemanningham.com.au/wp-content/uploads/2024/02/No-branding-2024-02-28T091622.643-1024x683.jpg" className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className="card-title">Personal Training</h5>
                  <p className="card-text">Get personalized workout plans and one-on-one training sessions with our certified trainers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src="https://cdn.create.vista.com/api/media/medium/153033740/stock-photo-sporty-people-exercising-in-gym?token=" className="card-img-top" alt="Service 2" />
                <div className="card-body">
                  <h5 className="card-title">Group Classes</h5>
                  <p className="card-text">Join our group fitness classes, including yoga, pilates, Zumba, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/05/shutterstock_1621261183-1.jpg?fit=1000%2C666&ssl=1" className="card-img-top" alt="Service 3" />
                <div className="card-body">
                  <h5 className="card-title">Nutritional Guidance</h5>
                  <p className="card-text">Receive expert advice on nutrition and diet plans to complement your fitness routine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
