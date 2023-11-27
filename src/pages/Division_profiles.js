import Npqsd from '../assets/image/logo_divisions/NPQSD NBG 1.png';
import Nsic from '../assets/image/logo_divisions/NSIC NBG 1.png';
import Ppssd from '../assets/image/logo_divisions/PPSSD NBG 1.png';
import Aed from '../assets/image/logo_divisions/aed-NBG-01.png';
import Cpmd from '../assets/image/logo_divisions/CPMD-NBG-1.png';
import Crpsd from '../assets/image/logo_divisions/CRPSD Logo 1 White Circle.png';

import Footer from "../components/Footer"

export default function Division_Profiles(){
    return(
        <>

<div className = "sub-content container">
    <div className = "col-md-12 justify-content-center" >

            <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Division Profiles</h3>
            </div>

            <div className = "sub-content container">
                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>National Plant Quarantine Services Division</h3>
                </div>

                <img src={Npqsd} style={{maxWidth:"100%", width:"300px"}} alt="npqsd"/>

                <p>The (NPQSD) of the Bureau of Plant Industry is the regulatory arm of the Philippine Department of Agriculture when it comes to matters of import, export, domestic movement, as well as market access of plants and plant products. 
                </p>
            </div>

            <div className = "sub-content container">
                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>National Seed Industry Council</h3>
                </div>

                <img src={Nsic} style={{maxWidth:"100%", width:"300px"}} alt="nsic"/>

                <p>PSB was the office responsible in the approval and registration of crop varieties. It is the Director of the Bureau of Plant Industry that directly supervises the activities of PSB. Until finally, through RA 7308, the National Seed Industry Council was created replacing PSB. </p>
            </div>


            <div className = "sub-content container">
                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Plant Product Safety Services Dvision</h3>
                </div>

                <img src={Ppssd} style={{maxWidth:"100%", width:"300px"}} alt="ppssd"/>

                <p>The Plant Product Safety Services Division (PPSSD) under the BPI is tasked to undertake responsibilities relevant to food safety of fresh and minimally processed plant foods from primary production to post-harvest stages of the food supply chain. </p>
            </div>


            <div className = "sub-content container">
                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Agricultural Engineering Division</h3>
                </div>

                <img src={Aed} style={{maxWidth:"100%", width:"300px"}} alt="aed"/>

                <p>The recognition of the importance of agricultural engineering research and development was officially formalized in the Bureau of Plant Industry (BPI) in 1957 with the establishment of the Farm Operations Division which later in 1972, became the Agricultural Engineering Division. </p>
            </div>


            <div className = "sub-content container">
                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Crop Pest Management Division</h3>
                </div>

                <img src={Cpmd} style={{maxWidth:"100%", width:"300px"}} alt="cpmd"/>

                <p>The recognition of the importance of agricultural engineering research and development was officially formalized in the Bureau of Plant Industry (BPI) in 1957 with the establishment of the Farm Operations Division which later in 1972, became the Agricultural Engineering Division. </p>
            </div>


            <div className = "sub-content container">
                <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                    <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Crop Research Production and Support Division</h3>
                </div>

                <img src={Crpsd} style={{maxWidth:"100%", width:"300px"}}  alt="crpsd" />

                <p>The Crop Research and Production Support Division (CRPSD) is a unit within the Bureau of Plant Industry primarily tasked to handle two of the agency’s most crucial functions: research and development (R&D) and production support.</p>
            </div>
    </div>
</div>

    
          


            <Footer />
        </>
    )
}