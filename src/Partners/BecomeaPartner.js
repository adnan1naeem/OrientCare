import React from 'react'
import logo_one from '../Assets/logo_one.avif'
import './becomeapartner.css';
import Footer from '../Footer';

const index = () => {
    return (
        <div>
            <div className="div_one" style={{ paddingTop: 50, paddingBottom: 20 }}>
                <img
                    src={logo_one}
                    alt="orient_logo"
                    style={{ width: 160, paddingTop: "50px" }}
                />
                <h4>WANT TO BE OUR PARTNER</h4>
                <p style={{ fontSize: "15px" }}>
                    Intrested in doing business with OrientCare?
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ fontSize: "15px" }}>
                    Tell us more about your company
                </p>
            </div>

            {/* Become a Partner Form */}
            <div className='element1'>
                <form method="POST" className='becomeapartner-form'>
                    <div className='input-element'>
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control-1" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group"> 
                            <label for="Email">Email Address</label>
                            <input type="email" className="form-control-1" id="Email" name="Email" required />
                        </div>
                    </div>
                    <div className='input-element'>
                        <div className="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" className="form-control-1" id="lname" name="lastname" required />
                        </div>
                        <div className="form-group">
                            <label for="phonenumber">Phone Number</label>
                            <input type="number" className="form-control-1" id="Email" name="Email" required />
                        </div>
                    </div>
                    <div className='input-element'>
                        <div className="form-group">
                            <label for="yourtitle">Your Title</label>
                            <input type="text" className="form-control-1" id="firstName" name="yourtitle" required />
                        </div>
                        <div className="form-group">
                            <label for="inquiry">Inquiry Type</label>
                            <select className="form-control-1" id="inquiry" name="inquiry" required>
                                <option value=""></option>
                                <option value="Want to be a dealer?">Want to be a dealer?</option>
                                <option value="Want to be a disctibutor?">Want to be a disctibutor?</option>
                                <option value="Want to be an installer or service Technician?">Want to be an installer or service Technician?</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-checkbox-1'>
                        <input type='checkbox' className='form-check-input' id='acceptCheckbox' />
                        <label className='form-check-label' for='acceptCheckbox'>I consent to having this website store my submitted information so they can respond to my inquiry.See our privacy policy to learn more how we use data.</label>
                    </div>

                    {/* Submit Buttom */}
                    <div className='form-submit'>
                        <input type='submit' className='becomeapartner-btn'/>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>

    )
}

export default index