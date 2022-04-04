import "./myProjects.css"
import Project from "../project/Project"
import weather from "../../img/weatherapp.jpg"
import todo from "../../img/todo.jpg"
import ecom from "../../img/2.jpg"
import blog from "../../img/blog.jpg"
import tic_tac from "../../img/tictak.jpg"
import movi_booking from "../../img/movibooking.jpg"
const MyProjects=()=>{
    return(
        <div  className="mp">
            <div className="mp-text">
                <h1 className="mp-title">My Projects</h1>
            </div>
            <div className="mp-projects">
                <Project src={ecom} name={"Lapi Store"} w3={"https://e-lappi-shop.herokuapp.com/"}/>
                <Project src={movi_booking} name={"Movi Booking"} w3={"#"}/>
                <Project src={todo} name={"Todo List"} w3={"#"}/>
                <Project src={weather} name={"Weather App"} w3={"#"}/>
                <Project src={blog} name={"Bloggers Site"} w3={"https://bloggermm.herokuapp.com/"}/>
                <Project src={tic_tac} name={"Tic Tak Toe"} w3={"#"}/>
            </div>
        </div>
    )
}

export default MyProjects