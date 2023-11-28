import {Link} from 'react-router-dom';

import Hero_Banner from '../assets/image/hero_banner/hero-banner-v4.png';
import Manila_Layout from '../assets/image/maps/manila_layout_v3.png'
import BPI_Map from '../assets/image/brand/map BPI v4.png';
import Pamphlet_logo from '../assets/image/brand/isometric bpi logo v2.png';

import Footer from '../components/Footer';

export default function Home(){
    return(
        <>

        
        <img style={{maxWidth:"100%", margin:"0px 0px"}} src={Hero_Banner} alt="hero-banner"/>
        
    

        <div style={{backgroundColor:"#f3f3f3",padding:"75px 0px"}}>
                <div className = "sub-content container">
                    <div class="row row-grid align-items-start" style={{ margin:"90px 0", padding:"150px 20px"}}>

                        <div class="col-lg-7">
                                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"20px"}}>
                                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Location of the Office</h3>
                                </div>
                            
                                <p style={{textAlign:"justify",fontSize:"16px", fontWeight:"500"}}>The Bureau of Plant Industry (BPI) is situated at 692 San Andres Street, Malate, Manila. This strategic location in the capital city of the Philippines places the BPI in a central and accessible position. 
                                <br/><br/>As an essential government agency, the BPI plays a vital role in the country's agricultural and plant-related initiatives. Its presence in Manila ensures that it is well-connected to government offices, research institutions, and industry stakeholders. </p>
                                <hr />
                                <h5 className = "display-4 mb-0" style = {{textTransform:"uppercase",fontWeight:"700", fontSize:"12px", textAlign:"left", color:"white", backgroundColor:"#241c1c", padding:"12px"}} >BUREAU OF PLANT INDUSTRY, 692 SAN ANDRES ST., MALATE, MANILA, NATIONAL CAPITAL REGION, PHILIPPINES, 1004</h5>
                        </div>
                        <div class="col-lg-5">
                                <img style={{maxWidth:"100%", width:"300px"}} src={Manila_Layout} alt="manila=map"/>
                        </div>
                    </div>
                </div>

        </div>




        <div className = "sub-content container" >
                <div class="row row-grid justify-content-center" style={{ margin:"130px 0", padding:"150px 20px"}}>

                        <div className = "col-md-12" style={{marginBottom:"30px"}}>

                        <div className="box--text" style={{backgroundColor:"#fcb04f", marginLeft:"auto",marginRight:"auto", padding:"10px", marginBottom:"30px"}}>
                            <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Customer Inquiries</h3>
                        </div>  

                            <h3 style = {{textTransform:"uppercase",fontWeight:"900", fontSize:"25px", color:"#4f7942", textAlign:"center"}}>Where can we point you to our office today?</h3>
                            
                            <div class="input-group mb-4">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="" type="text" style={{width:"50%"}}/>
                            </div>
                        </div>
                   

                        <div className = "col-md-12" style={{marginBottom:"30px"}}>
                            <h3 style = {{textTransform:"uppercase",fontWeight:"900", fontSize:"25px", color:"#4f7942", textAlign:"center"}}>frequently asked questions</h3>
                            <div className = "button group">
                                    <button type="button" class="btn btn-success btn-round my-2" style={{backgroundColor:"#4f7942"}}>where are the trainings in BPI</button>
                                    <button type="button" class="btn btn-success btn-round my-2" style={{backgroundColor:"#4f7942"}}>where is the hydrophonics training being done</button>
                                    <button type="button" class="btn btn-success btn-round my-2" style={{backgroundColor:"#4f7942"}}>where is kadiwa held in bpi</button>
                                    <button type="button" class="btn btn-success btn-round my-2" style={{backgroundColor:"#4f7942"}}>where can i get free seeds</button>
                                    <button type="button" class="btn btn-success btn-round my-2" style={{backgroundColor:"#4f7942"}}>where can i get my plant quarantine</button>
                            </div>
                        </div>
                </div>
        </div>

        <div style={{backgroundColor:"#f3f3f3", padding:"75px 0px"}}>
            <div className = "sub-content container">
                <div class="row row-grid align-items-start" style={{ margin:"90px 0", padding:"150px 20px"}}>
                    
                    <div class="col-lg-5">
                        <img style={{width:"80%"}} src={BPI_Map} alt="locators-map-image"/>   
                    </div>

                    <div className="col-lg-7 aling-items-start">
                        <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"20px"}}>
                            <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>About the locator's map</h3>
                        </div>
                    
                        <p style={{textAlign:"justify",fontSize:"16px", fontWeight:"500"}}> The BPI Central Office locators map is a visual representation that pinpoints specific locations, offering an overview of various points of interest within the two BPI compounds. The map highlights key offices and areas, such as the bureau divisions, and administration offices, providing visitors and users with a convenient reference to navigate the BPI Central Office. <br/><br/>
                        The maps serve as valuable tool both the website and the tri-fold IEC for seeking essential services, offering a user-friendly and informative images and descriptions to easily identify and locate specific destinations within the map and compounds.</p>
                    
                        <Link to={`/locator-map`} style={{backgroundColor:"#4f7942"}} type="button" class="btn btn-success btn-round"><span style={{textTransform:"uppercase",fontWeight:"700"}}>to locators map</span></Link>
                    </div>

                </div>
            </div>
        </div>
       

        




        <div className = "sub-content container">

            <div className="sub-content" style={{ margin:"90px 0", padding:"150px 20px"}}>
                <div className="box--text" style={{backgroundColor:"#fcb04f", marginLeft:"auto",marginRight:"auto", padding:"10px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Locators Map IEC</h3>
                </div>

                <h3 style ={{ textTransform:"uppercase", fontSize:"20px", fontWeight:"600", margin:"auto", padding:"20px"}}>grab a copy of the locators map brochure at the information and computer section</h3>
                <img style={{maxWidth:"100%", width:"400px", margin:"20px 0px"}} src={Pamphlet_logo} alt="pamphlet-icon"/>  
            </div>

        </div>

    
            
            <Footer />
        </>
    )
}