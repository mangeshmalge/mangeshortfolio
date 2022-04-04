import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email-png-logo_2076842.png"
import location from "../../img/location-symbol-png_1093394.png";
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context";
const Contact=()=>{
    const theme=useContext(ThemeContext)
    const darkMode= theme.state.darkMode;
    const formRef=useRef()
    const [done,setdone]=useState(false)
    const [isloading,setisloading]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()

        emailjs.sendForm('service_tam6m67', 'template_4varsbi', formRef.current, 'user_GMbOrMLKx3EawIQgc3kUn')
        .then((result) => {
            console.log(result.text);
            setisloading(true)
            setdone(true)
            setisloading(false)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c" id="contact-page">
            <div className="c-bg"></div>
            <div className="c-name"><h1>Contact</h1></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss Your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +91-9595096053/9607439296
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            mangeshm144@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={location} alt="" className="c-icon" />
                            Latur Maharastra-413512
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's Your Story?</b>Get in touch. always available for freelancing if the right project comes along me. 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" required /><br />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" required/><br />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" required/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="message" id=""  rows="5" placeholder="message" required></textarea>
                        <button>Submit</button><br /><br />
                        {isloading && <div className="spinner spinner-border"></div>}
                        {done && <p className="alert alert-success">Thank You... I Will Reply You Soon.</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact