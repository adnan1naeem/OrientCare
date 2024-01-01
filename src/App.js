import React, { useState } from 'react';
import './App.css';
import logo from './Assets/Care-logo.avif';
import { TextField, Checkbox, Button } from "@mui/material";


function App() {
  const [newsletter, setNewsletter] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <h1 className="logoContainer">CONTACT US</h1>

      <div className="checkout-container">
        <div className="shipping">
          <p className='emailUs'>EMAIL US </p>
          <form>
            <div className="form-group">
              <p className='perfect'>Your name</p>
              <TextField
                style={{ width: "80%" }}
                id="Your name"
                label="Your name"
                variant="outlined"
                required
              />
            </div>
            <div className="form-group">
              <p className='perfect'>Your email</p>
              <TextField
                style={{ width: "80%" }}
                id="Your email"
                label="Your email"
                variant="outlined"
                required
              />
            </div>
            <div className="form-group">
              <p className='perfect'>Subject</p>
              <TextField
                style={{ width: "80%" }}
                id="Subject"
                label="Subject"
                variant="outlined"
                required
              />
            </div>
            <div className="form-group">
              <p className='perfect'>Your message</p>
              <TextField
                style={{ width: "80%" }}
                id="Your message"
                label="Your message"
                variant="outlined"
                rows={5}
                required
              />

            </div>
            <div className="form-group" style={{ display: "flex" }}>
              <Checkbox
                id="newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              <label style={{ marginTop: "1.5%" }} htmlFor="newsletter">
                I consent to having this website store my submitted information so they can respond to
                my inquiry.See our privacy policy to learn more how we use data.
              </label>
            </div>
          </form>
        </div>
        <div className="cart" style={{ marginTop: "15%", padding: 30, borderRadius: 5 }}>
          <div className="cart-total">
            <h4 style={{ textAlign: "center" }}>CART TOTALS</h4>
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
