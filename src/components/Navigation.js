import {Link} from 'react-router-dom';
import Locators_map_logo from '../assets/image/brand/locators-map-logo-v4.png';

export default function Navigation(){
    return(
        
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2">
          <div className="container">
            <Link className="navbar-brand mr-lg-5" to={`/`}>
              <img src={Locators_map_logo} alt="locators-map" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <Link to={`/`}>
                      <img src={Locators_map_logo} alt="locators-map"/>
                    </Link>
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">

               
              </ul>

              <ul className="navbar-nav align-items-lg-center ml-lg-auto">

              <li className="nav-item">
                    <Link to = {`/`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/locators-map`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text">Locators Map</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/division-profiles`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text">Division Profiles</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/inquiries`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text">Inquiries</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/contact-us`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text">Contact Us</span>
                    </Link>
                </li>

               
              </ul>
            </div>
          </div>
        </nav>
        
    )
}