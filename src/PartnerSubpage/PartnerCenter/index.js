import React from 'react'
import './style.css'
import Footer from '../../Footer';
import logo_one from '../../Assets/logo_one.avif'

const index = () => {
  return (
    <div>
        <div className="div_one" style={{ paddingTop: 50, paddingBottom: 20 }}>
                <img
                    src={logo_one}
                    alt="orient_logo"
                    style={{ width: 160, paddingTop: "50px" }}
                />
                <h4>PARTNER CENTER</h4>
        </div>
        <div className='partnercenter-element'>
            <form className='partnercenter-form'>
                <div className='partnercenter-input'>
                    <input type='text' name='username' placeholder='USER NAME' />
                    <input type='password' name='password' placeholder='PASSWORD' />
                </div>
                <div className='partnercenter-submit'>
                    <input type='submit' name='submit'/>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default index