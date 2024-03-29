import Footer from "../components/Footer"

export default function Inquiries(){
    return(
        <>
            <div className = "sub-content container">
                <div className = "col-md-12 justify-content-center" >
                    <div className="box--text" style={{backgroundColor:"#fcb04f", padding:"10px", marginBottom:"30px"}}>
                        <h3 className = "display-3 mb-0" style = {{textTransform:"uppercase",fontWeight:"900",color:"white", fontSize:"20px"}}>Ask us where we can lead you next</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}