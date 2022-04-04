import "./intro.css"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import me from "../../img/me.png"
const  Intro=()=>{
    const textRef=useRef()
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backSpeed:60,
            backDelay:1500,
            strings:["React js Developer","Node js Developer"],
        })
    },[])
    return (
        <div>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                                <h2 className="i-intro">Hi There, I'm</h2>
                                <h1 className="i-name">Mangesh Malge</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <h2 className="i-title-item"><span  ref={textRef}></span></h2>
                            </div>
                        </div>
                        <a href="#contact-page">
                        <button className="i-btn">Contact Me</button>
                        </a>
                        
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <div>
                    <img src={me} alt="image" className="i-img" />
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Intro 