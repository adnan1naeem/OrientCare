import { Typography, Box, Grid } from '@mui/material'
import React from 'react'
import Footer from '../footer/index'
import Header from '../../components/Header/index'
import Link from "next/link";

function index() {
    const paragraphText = () => {
        return {
            textAlign: 'left', fontSize: '15px', color: "#8A8A8A"
        };
    };

    return (
        <>
            <Header />
            <Grid sx={{ ml: '10%', marginRight: '10%', pt: '25px' }}>
                <Link
                    href='/'
                    activeStyle={{ color: '#4b6ee1' }}
                    onMouseOver={(e) => { e.target.style.color = '#000'; }}
                    onMouseOut={(e) => { e.target.style.color = '#8A8A8A'; }}>
                    <Typography variant="h6" style={{ display: 'inline', color: '#B5B7C4', fontSize: '11px', }}>
                        HOME
                    </Typography>
                </Link>
                <Typography variant="h6" style={{ display: 'inline', color: '#343538', fontSize: '11px' }}>
                    {' / '}
                </Typography>
                <Typography variant="h6" style={{ display: 'inline', color: '#343538', fontSize: '11px' }}>
                    PRIVACY POLICY
                </Typography>
            </Grid>
            <Box sx={{ ml: '10%', marginRight: '20%', pt: '25px' }}>
                <Typography variant='f4' sx={{ color: '#343538', fontSize: '22px', fontWeight: '500', lineHeight: '29.5px' }}>
                    Privacy Policy
                </Typography>
                <Typography sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>PRIVACY POLICY</Typography>
                <Typography sx={paragraphText}>
                    Thank you for visiting OrientCare website and showing your interest in our products and services. We value your privacy, and this Privacy Policy outlines our commitment to protecting it.
                    <br />
                    Please note that this Privacy Policy specifically applies to OrientCare website and online operations and does not cover our offline practices. It also does not extend to websites of other companies or organizations that may be linked or affiliated with OrientCare but operate independently. These websites may have their own privacy policies and practices, which you should review separately. OrientCare has no control over the information collected or submitted on third-party websites. We have designed our policy to comply with applicable country and provincial
                    laws varying according to each state, governing the protection of personal information.
                    If you have any questions or concerns, please refer to the contact section provided.<br />
                    Loss of or damage to records or data including, but not limited to, any costs of regenerating or restoring any lost or
                    damaged records or data<br /><br />
                    OrientCare collects Personally Identifiable Information when a visitor provide feedback, ask questions, submit applications, warranty forms, or request information about OrientCare products and services, make a purchase, we collect and utilize personally identifiable information about the visitor. This may include name, mailing address, telephone number, email address, and other necessary details to address visitor’s inquiries and handle transactions. OrientCare may retain and store the information thus provided to send the visitor occasional updates about OrientCare, our affiliates, and our products and services. Additionally,
                    we may utilize the information for internal marketing analysis to gain better insights into our customers and the market.<br />
                </Typography>
                <Typography sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>Non-Personally Identifiable Information</Typography>
                {/* <Typography>
                    Privacy Policy Please read our <span style={{ color: "#DE414A" }}>
                        <NavLink
                            exact
                            to="https://mrcool.com/privacy-policy/"
                            activeClassName="active"
                            className="paragraph">
                            privacy policy
                        </NavLink></span> for more information.
                </Typography> */}
                <Typography sx={paragraphText}>
                    <br />
                    OrientCare collects and use non-personal identifiable information through following methods about any visitor on its website:
                    <br /> <br />
                </Typography>
                <Typography variant='f4' sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    Cookies:
                </Typography>

                <Typography sx={paragraphText}><br />A cookie is a small data file that is stored on your hard drive when you visit our website. Cookies assist us in tracking the traffic to our website, allowing us to identify the parts that are of most interest to visitors. In order to provide you with personalized content, we may combine cookie information with personally identifiable information. However, this information expires at the end of each visit to the site. You have the option to configure your browser to notify you before a cookie is stored, refuse cookies altogether, or delete all cookies from your hard drive. Please note that if you choose to
                    reject or delete cookies, it may limit or prevent your ability to navigate our website effectively.
                </Typography>
                <br />
                <Typography variant='f4' sx={{ color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    Referrers, IP Addresses, and Environmental Variables
                </Typography>
                <Typography sx={paragraphText}><br />OrientCare gathers information through referrers, IP addresses, and various environmental variables. A referrer refers to the URL of the website you arrived from, which is transmitted to our
                    server by your web browser. IP address is a unique identifier assigned to your computer on a network. Environmental variables encompass details like the domain from which you accessed the internet, the time of your visit, the type of web browser and operating system used, the website you visited prior to ours, the pages you viewed on our site, and the website you visited afterwards. The collection of IP address information enables us to administer our website and obtain general demographic insights.
                </Typography>
                <Typography variant='f4' sx={{ color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />Information Sharing:
                </Typography>
                <Typography sx={paragraphText}>
                    <br />  We may disclose personal information collected through our website to carefully selected third parties, such as our affiliates, dealers, distributors, partners, and sponsors, who offer products or services that we believe may be of interest to you. If you prefer not to have your information shared in this manner, please refer to the section below titled. What other choices do I have regarding information collected from me?<br /><br />

                    OrientCare may also share both personally identifiable and non-personally identifiable information with third parties who assist in website management, data processing, order fulfillment, shipping services, or other related services on our behalf.<br /><br />

                    As OrientCare expands its business, there may be transactions involving the sale of assets, acquisitions, or divestiture of subsidiaries or business units. In such cases, personal information covered by this Privacy Policy may be transferred as part of the assets.  We do not sell the information provided by our users.<br /><br />

                    Moreover, OrientCare retains the authority to reveal both personal and non-personal data pertaining to you when it is deemed reasonably essential to adhere to legal obligations, such as court mandates, safeguard the interests of OrientCare or others, or mitigate potential instances of credit or various forms of fraudulent activities.<br />
                </Typography>
                <Typography variant='f4' sx={{ color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />Third Party Links:
                </Typography>
                <Typography sx={paragraphText}>
                    <br />This website may include hyperlinks to other websites, and third parties may occasionally link to our website. It is important to note that we are not accountable for the content or practices of any third-party website. We strongly recommend that our users review the privacy policies of the websites they visit.<br />
                </Typography>
                <Typography variant='f4' sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />   How Can I change what promotional communications I receive?
                </Typography>
                <Typography sx={paragraphText}>
                    <br /> If you would like to opt-out of receiving promotional messages from us, please send an email to
                    <span style={{ color: "#DE414A" }}>

                        info@OrientCare.us .
                    </span>
                    Please include your name and e-mail address in the body of the e-mail and reference “Remove” on the subject line. Please note that it may take a reasonable period of time for us to process opt-out requests.<br /><br />

                    If you do not want to us to share information with third parties as described under the heading, “Information Sharing,” please send an e-mail to  <span style={{ color: "#DE414A" }}>

                        info@OrientCare.us
                    </span>.<br /><br />
                    If you would like to change or modify information you have previously provided to OrientCare through our Web site, please send an e-mail to  <span style={{ color: "#DE414A" }}>
                        info@OrientCare.us .
                    </span>. Please note that we may not be able to make certain changes for legal reasons or to preserve accurate records of transactions.<br /></Typography>



                <Typography variant='f4' sx={{ color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />How does OrientCare secure personal information?<br />
                </Typography>
                <Typography sx={paragraphText}>
                    <br /> We utilize appropriate security measures to safeguard personal information collected through our websites, aiming to prevent any loss, misuse, or unauthorized changes.
                </Typography>
                <Typography variant='f4' sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />ACCOUNT:<br />
                </Typography>
                <Typography sx={paragraphText}>
                    <br />It is your responsibility to safeguard your password and manage your account for OrientCare. To ensure the security of your account, refrain from sharing your password with anyone. In the event that you suspect your account has been compromised, take prompt action to change your password. Please note that OrientCare will never ask for your password via phone, mail, email, or any other communication method<br />
                </Typography>
                <Typography variant='f4' sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />Children under the age of 13<br />
                </Typography>
                <Typography sx={paragraphText}>
                    <br />Children who are less than thirteen years old are not the intended audience of our website, and we do not intentionally request, gather, or utilize personally identifiable information from any child under the age of thirteen. In the event that we discover that we have unknowingly obtained personally identifiable information from a user under the age of 13, we will expeditiously remove the information from our records.<br />
                </Typography>

                <Typography variant='f4' sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>
                    <br />Disclaimer:<br />
                </Typography>
                <Typography sx={paragraphText}>
                    <br />Please make a note of the specified effective date. In the event that we make modifications to this Privacy Policy, we will update the date mentioned below.
                    <br /><br />August 2023<br /> <br />
                    In the event of any questions and queries about this Privacy Policy please contact us by sending an email at
                    <span style={{ color: "#DE414A" }}>
                        info@OrientCare.us
                    </span>.

                </Typography>


            </Box >

            <Footer />
        </>
    )
}

export default index