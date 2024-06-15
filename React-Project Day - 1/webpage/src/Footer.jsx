import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-2">
      <div className="container-fluid footer ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h5>Mumbai Head Office</h5>
              <ul className="list-unstyled">
                <li>+91 75061 02102</li>
                <li>+91 75061 05105</li>
                <li>+91 75061 12233</li>
                <li>+91 75061 10099</li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12">
              <h5>Other Locations</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>NAGPUR: 9322626565</li>
                    <li>PUNE: 9322126161</li>
                    <li>VADODARA: 9322126262</li>
                    <li>DELHI: 9999011211</li>
                    <li>BENGALURU: 7040050000</li>
                    <li>BHUBANESWAR: 9320074456</li>
                    <li>KOCHI: 9320011294</li>
                    <li>JAIPUR: 9152727324</li>
                    <li>HYDERABAD: 9321721010</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>GOA: 9322126161</li>
                    <li>GUWAHATI: 9322626565</li>
                    <li>CHENNAI: 9322626565</li>
                    <li>KOLKATA: 9820100695</li>
                    <li>AHMEDABAD: 9322126262</li>
                    <li>LUCKNOW: 9999011211</li>
                    <li>INDORE: 9152727325</li>
                    <li>CHANDIGARH: 9999011211</li>
                    <li>GURUGRAM: 9289012888 / 9289012889</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white me-2"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row mt-3">
            <div className="col-12">
              <p className="mt-2">&copy; 2020 SK-27 GYM All Rights Reserved. Developed By DESIGN ACCENT</p>
              <span>Made By Aniket...</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
