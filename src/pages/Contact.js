import React from "react";
import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"
import "../index.css"

function Contact() {
    return (
        <div>
            <Header />
            <div>
                <p className="contactMe">CONTACT</p>
                <div className="idForm">
                    <form action="https://submit-form.com/ScahwqKy" className="needs-validation">
                        <div className="form-row">
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="validationTooltip01">Name</label>
                                <input type="text" className="form-control" id="validationTooltip01" name="name" placeholder="Joe Johnson" required />
                                <div className="valid-tooltip" />
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="validationTooltip02">Email</label>
                                <input type="text" className="form-control" id="validationTooltip02" name="email" placeholder="123@gmail.com" required />
                                <div className="valid-tooltip" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Message</label>
                            <textarea className="form-control" id="validationTextarea" name="message" placeholder="I'm looking to create a page that..." required></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit" id="submitButton">Submit form</button>
                        <a className="fa fa-download" id="resumeButton" href="../assets/landonResume.pdf" download="LandonResume">Download Resume</a>
                    </form>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Contact