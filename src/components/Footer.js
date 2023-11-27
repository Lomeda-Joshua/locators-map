import Locators_Map_Logo_White from '../assets/image/brand/locators-map-logo-v4-white.png';

export default function Footer(){
    return(
        <div className = "app-footer">
            <div className="container d-flex">
                <img style = {{maxWidth:"50%", width:"230px",marginTop:"30px", marginBottom:"20px"}} src={Locators_Map_Logo_White} alt="locators-map-logo" /> 
            </div>
            
                <div class="container">                    
                    <div class="row row-grid">
                        <div class="col-lg-5">                            
                            <ul class="navbar-nav align-items-lg-start ml-lg-start" >
                            <h5 style={{textTransform:"uppercase", fontWeight:"700", color:"white"}}>The Bureau and Department</h5>    
                                <li class="nav-item">
                                    <a href="https://www.buplant.da.gov.ph/" class="nav-link" role="button" style={{  textAlign:"left"}}>
                                        <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"500", textTransform:"uppercase", fontSize:"15px"}}>bureau of plant industry</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.da.gov.ph/" class="nav-link"  role="button" style={{  textAlign:"left"}}>
                                        <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"500", textTransform:"uppercase", fontSize:"15px"}} >department of agricutlure</span>
                                    </a>
                                </li>
                                <li class="nav-item" style={{ paddingTop:"0px"}}>
                                    <a href="#" class="nav-link" role="button" style={{ textAlign:"left"}}>
                                        <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"500", textTransform:"uppercase", fontSize:"15px"}} >information and computer section</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-5 text-lg-center btn-wrapper">
                            <ul class="navbar-nav align-items-lg-start ml-lg-start" >
                            <h5 style={{textTransform:"uppercase", fontWeight:"700", color:"white"}}>Page information</h5>    
                                <li class="nav-item">
                                        <a href="#" class="nav-link" role="button" style={{ textAlign:"left"}}>
                                            <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"500", textTransform:"uppercase", fontSize:"15px"}} >transparency seal</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" data-toggle="dropdown" role="button" style={{ textAlign:"left"}}>
                                            <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"500", textTransform:"uppercase", textAlign:"left", fontSize:"15px"}}>bureau directory</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" data-toggle="dropdown" role="button" style={{  textAlign:"left", fontSize:"15px"}}>
                                    
                                            <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"500", textTransform:"uppercase" }}>division pages</span>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="justify-content-md-start" style = {{paddingBottom:"20px"}}>
                    <div className="container">    
                    <hr style={{fontColor:"white"}}/>
                        <div class="copyright " style = {{ fontSize:"11px", color:"white", textAlign:"left" }}>
                        THE CENTRAL OFFICE LOCATORS MAP IS MADE AND PUBLISHED BY THE INFORMATION AND COMPUTER SECTION <br/>| DEPARMENT OF AGRICULTURE - BUREAU OF PLANT INDUSTRY | BPI-ICS &copy; 2023
                        </div>
                    </div>
                </div>

        </div>
    )
}