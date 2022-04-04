import "./about.css"
import me from "../../img/aboutme.jpg"
const About=()=>{
    return(
        <div className="a">
           <div className="a-left">
               <div className="a-card bg"></div>
               <div className="a-card">
                   <img src={me} alt="" className="a-img" />
               </div>
           </div>
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub"> Hey, I'm Mangesh. I'm a full stack developer. I Converts Your Creative Ideas Into Reality.
               </p>
               <p className="a-desc">I started my coding journy almost exactly a one and half year ago and now I'm working full time and doing freelance projects on the side for my friends. You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals.</p>
           </div>
        </div>
    )
}
export default About