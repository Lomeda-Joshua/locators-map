import {Link} from 'react-router-dom';
import Locators_map_logo from '../assets/image/brand/locators-map-logo-v4.png';

export default function Navigation(){
    return(
        
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2">
          <div className="container">
            <Link className="navbar-brand mr-lg-5" to={`/locators-map`}>
              <img src={Locators_map_logo} alt="locators-map" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <Link to={`/locators-map`}>
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
                    <Link to = {`/locators-map`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text" style={{fontWeight:"900"}}>Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/locator-map`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text" style={{fontWeight:"900"}}>Locators Map</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/division-profiles`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text" style={{fontWeight:"900"}}>Division Profiles</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/inquiries`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text" style={{fontWeight:"900"}}>Inquiries</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/contact-us`} className="nav-link" role="button">
                        {/* <i class="ni ni-collection d-lg-none"></i> */}
                        <span className="nav-link-inner--text" style={{fontWeight:"900"}}>Contact Us</span>
                    </Link>
                </li>

               
              </ul>
            </div>
          </div>
        </nav>
        
    )
}