import Footer from '../components/Footer';

import Locators_Map_build from '../assets/image/maps/map bpi v3.2.png';

export default function Locators_Map(){
    return(
        <>
            <div className="subcontent" style={{margin:"60px 0px"}}>
                <img src={Locators_Map_build} style={{width:"40%"}} alt="locators-map-bpi"  />
            </div>

            <Footer />
            
        </>
    )
}