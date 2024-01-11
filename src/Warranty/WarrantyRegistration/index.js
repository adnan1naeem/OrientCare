import React from 'react';
import './style.css';
import logo_one from '../../Assets/logo_one.avif';
import Footer from '../../Footer';
import RegImg from '../../Assets/WarrantyRegistration.webp';

const index = () => {
  return (
    <div>
      <div className="div_one" style={{ paddingTop: 10, paddingBottom: 20 }}>
        <img
          src={logo_one}
          alt="orient_logo"
          style={{ width: 160, paddingTop: "50px" }}
        />
        <h4>WARRANTY REGISTRATION</h4>
        <p style={{ fontSize: "15px" }}>
          Register your warranty here.
        </p>
      </div>
      <div className='WarrantyReg-sec2'>
        <div className='part-left'>
          <form id="Warranty-form">
            <p className='warranty-form-heading'>IDENTIFY YOUR PRODUCT</p>
            <div className='Reg-form-group'>
              <label for='producttype'>Product Type</label>
              <select className="prod-type" id="prod-type" name="producttype" required>
                <option value="">Select Product Type</option>
                <option value="Mini Split Innverter Heat Pumps">Mini Split Innverter Heat Pumps</option>
              </select>
            </div>
            <div className='Reg-form-group'>
              <label for='unittype'>Unit Type</label>
              <select className="unit-type" id="unit-type" name="unittype" required>
                <option value="">Select One</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Compressor">Compressor</option>
                <option value="Outdoor Fan Motor">Outdoor Fan Motor</option>
                <option value="Indoor Fan Motor">Indoor Fan Motor</option>
                <option value="Louver">Louver</option>
              </select>
            </div>
            <div className='Reg-form-group'>
              <label for='modelnumber'>Model Number</label>
              <input type='text' id='model-num' className='model-num'/>
            </div>
            <div className='Reg-form-group'>
              <label for='serialnumber'>Serial Number</label>
              <input type='text' id='serial-num' className='serial-num'/>
            </div>
            <div className='Reg-form-group'>
              <input type='submit' value={'Next'}/>
            </div>
          </form>
        </div>
        <div className='part-right'>
          <img src={RegImg} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index