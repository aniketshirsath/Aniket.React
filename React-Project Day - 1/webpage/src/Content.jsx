import React from 'react';

function Content() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1>Brand Salman Khan</h1>
          <p style={{textAlign: 'justify'}}>
            Founded by the fitness enthusiast Salman Khan himself, SK-27 strives to provide affordable gyms with extensive expertise and state-of the art equipment. With the highest fan following as the fitness icon, Salman Khan inspires a wide range of audience with more people opting to become healthier & fitter.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src="https://www.beingstrong.in/images/the-brand.jpg" alt="Brand Salman Khan" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default Content;
