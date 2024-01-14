import Footer from '../components/Footer';

import Locators_Map_build from '../assets/image/maps/map bpi v3.4.png';

export default function Locators_Map(){
    return(
        <>
            <div className="subcontent" style={{margin:"60px 0px"}}>
                <img src={Locators_Map_build} style={{width:"40%"}} alt="locators-map-bpi"  />
            </div>

            <div>
                <h2>Functional Offices</h2>

                <h2>Office of the director</h2>
                <h2>National Plant Quarantine Services Division</h2>
                <h2>National Seed Industry Council</h2>
                <h2>Plant Product Safety Services Dvision</h2>
                <h2>Agricultural Engineering Division</h2>
                <h2>Crop Pest Management Division</h2>
                <h2>Crop Research Production and Support Division</h2>



                <h2>Point of Interest</h2>
                <h2>Green projects</h2>
                <h2>Guard house</h2>



            </div>

            <Footer />
            
        </>
    )
}