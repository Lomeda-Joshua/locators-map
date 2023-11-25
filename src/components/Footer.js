

export default function Footer(){
    return(
        <div className = "app-footer">
            <div className="container d-flex">
                <img style = {{width:"30%", marginTop:"30px", marginBottom:"20px"}} src="./assets/img/brand/locators-map-logo-v4-white.png" />
            </div>
            
                <div class="container">                    
                    <div class="row row-grid align-items-start">
                        <div class="col-lg-4">
                            <ul class="navbar-nav align-items-lg-start ml-lg-start" >
                                <li class="nav-item">
                                    <a href="https://www.buplant.da.gov.ph/" class="nav-link" role="button" style={{  textAlign:"left"}}>
                                        <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"900", textTransform:"uppercase", fontSize:"15px"}}>bureau of plant industry</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.da.gov.ph/" class="nav-link"  role="button" style={{  textAlign:"left"}}>
                                        <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"900", textTransform:"uppercase", fontSize:"15px"}} >department of agricutlure</span>
                                    </a>
                                </li>
                                <li class="nav-item" style={{ paddingTop:"0px"}}>
                                    <a href="#" class="nav-link"   role="button" style={{ textAlign:"left"}}>
                                        <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"900", textTransform:"uppercase", fontSize:"15px"}} >information and computer section</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 text-lg-center btn-wrapper">
                            <ul class="navbar-nav align-items-lg-start ml-lg-start" >
                                <li class="nav-item">
                                        <a href="#" class="nav-link"  href="#" role="button" style={{ textAlign:"left"}}>
                                            <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"900", textTransform:"uppercase", fontSize:"15px"}} >transparency seal</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" data-toggle="dropdown" href="#" role="button" style={{ textAlign:"left"}}>
                                            <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"900", textTransform:"uppercase", textAlign:"left", fontSize:"15px"}}>bureau directory</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" data-toggle="dropdown" href="#" role="button" style={{  textAlign:"left", fontSize:"15px"}}>
                                    
                                            <span class="nav-link-inner--text" style={{ color:"white", fontWeight:"900", textTransform:"uppercase" }}>division pages</span>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="justify-content-md-start" style = {{paddingBottom:"20px"}}>
                    <div className="container">    
                    <hr style={{fontColor:"white"}}/>
                        <div class="copyright " style = {{ fontSize:"12px", color:"white", textAlign:"left" }}>
                            BUREAU OF PLANT INDUSTRY | INFORMATION AND COMPUTER SECTION | &copy; 2023
                        </div>
                    </div>
                </div>

        </div>
    )
}