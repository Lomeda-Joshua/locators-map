import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home(){
    return(
        <>

        <div style={{backgroundColor:"#f3f3f3"}}>
                <div className = "sub-content container">
                    <div class="row row-grid align-items-start" style={{ margin:"90px 0", padding:"30px"}}>

                        <div class="col-lg-7">
                                <div className="box--text" style={{backgroundColor:"#fcb04f", width:"70%", padding:"10px", marginBottom:"30px"}}>
                                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Location of the Office</h3>
                                </div>
                            
                                <p style={{textAlign:"justify",fontSize:"18px"}}>The Bureau of Plant Industry (BPI) is situated at 692 San Andres Street, Malate, Manila. This strategic location in the capital city of the Philippines places the BPI in a central and accessible position. 
                                <br/><br/>As an essential government agency, the BPI plays a vital role in the country's agricultural and plant-related initiatives. Its presence in Manila ensures that it is well-connected to government offices, research institutions, and industry stakeholders. </p>
                                <hr />
                                <h5 className = "display-4 mb-0" style = {{textTransform:"uppercase",fontWeight:"700", fontSize:"13px", textAlign:"left"}} >BUREAU OF PLANT INDUSTRY, 692 SAN ANDRES ST., MALATE, MANILA, NATIONAL CAPITAL REGION, PHILIPPINES, 1004</h5>
                        </div>
                        <div class="col-lg-5">
                                <img style={{maxWidth:"100%", width:"400px"}} src="./assets/img/maps/manila_layout_v3.png" />
                        </div>
                    </div>
                </div>

        </div>




        <div className = "sub-content container" >
                <div class="row row-grid justify-content-center" style={{ margin:"24px", padding:"20px"}}>

                        
                    <h3 style = {{textTransform:"uppercase",fontWeight:"900", fontSize:"25px", color:"#4f7942", textAlign:"center"}}>How can we help you today</h3>
                        
                        <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                                </div>
                                <input className="form-control" placeholder="Search" type="text" style={{width:"50%"}}/>
                        </div>

                        <h3 style = {{textTransform:"uppercase",fontWeight:"900", fontSize:"25px", color:"#4f7942", textAlign:"center"}}>frequently asked questions</h3>
                        <div className = "button group">
                                <button type="button" class="btn btn-success btn-round my-2">where are the trainings in BPI</button>
                                <button type="button" class="btn btn-success btn-round my-2">where is the hydrophonics training being done</button>
                                <button type="button" class="btn btn-success btn-round my-2">where is kadiwa held in bpi</button>
                                <button type="button" class="btn btn-success btn-round my-2">where can i get free seeds</button>
                                <button type="button" class="btn btn-success btn-round my-2">where can i get my plant quarantine</button>
                        </div>
                </div>
        </div>

        <div style={{backgroundColor:"#f3f3f3"}}>
            <div className = "sub-content container" style={{backgroundColor:"#f3f3f3", padding:"20px"}}>
                <div class="row row-grid align-items-start" style={{ margin:"24px"}}>
                    
                    <div class="col-lg-3">
                        <img style={{width:"100%"}} src="./assets/img/brand/map BPI v4.png" />   
                    </div>

                    <div className="col-lg-9 aling-items-start">
                        <div className="box--text" style={{backgroundColor:"#fcb04f", width:"70%", padding:"10px", marginBottom:"30px"}}>
                            <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>About the locator's map</h3>
                        </div>
                    
                        <p style={{textAlign:"justify",fontSize:"18px"}}> The BPI Central Office locators map is a visual representation that pinpoints specific locations, offering an overview of various points of interest within the two BPI compounds. The map highlights key offices and areas, such as the bureau divisions, and administration offices , providing visitors and users with a convenient reference to navigate the BPI Central Office. <br/><br/>
                        The maps serve as valuable tool both the website and the tri-fold IEC for seeking essential services, offering a user-friendly and informative images and descriptions to easily identify and locate specific destinations within the map and compounds.</p>
                    
                        <Link to={`/locators-map`} type="button" class="btn btn-success btn-round">to locators map</Link>
                    </div>

                </div>
            </div>
        </div>
       

        




        <div className = "sub-content container" style={{padding:"30px"}}>

                <div className="box--text" style={{backgroundColor:"#fcb04f", width:"70%", marginLeft:"auto",marginRight:"auto", padding:"10px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Locators Map IEC</h3>
                </div>

                <h3 style ={{ textTransform:"uppercase", fontSize:"23px", fontWeight:"700", width:"60%", margin:"auto", padding:"20px"}}>grab a copy of the locators map brochure at the information and computer section</h3>
                <img style={{width:"35%", margin:"22px 0px"}} src="./assets/img/brand/pamplet-icon-V2.png" />  
                
        </div>

    
            
            <Footer />
        </>
    )
}