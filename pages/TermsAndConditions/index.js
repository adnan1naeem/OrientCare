import { Typography, Box } from '@mui/material'
import React from 'react'
import Footer from '../footer/index'
import Link from 'next/link';
import Header from '../../components/Header/index'

function index() {
    const paragraphText = () => {
        return {
            textAlign: 'left', fontSize: '15px', color: "#8A8A8A"
        };
    };

    return (
        <>
            <Header />
            <Box sx={{ ml: '10%', marginRight: '10%', pt: '25px' }}>
                <Typography variant='f4' sx={{ color: '#343538', fontSize: '22px', fontWeight: '500', lineHeight: '29.5px' }}>
                    Terms Of Services
                </Typography>
                <Typography sx={{ pt: '18px', color: '#8A8A8A', fontSize: '15px', fontWeight: '700' }}>Terms of Use:</Typography>
                <Typography sx={{ pt: '1rem', color: '#8A8A8A', fontSize: '15px', fontWeight: '700', pb: '10px' }}>Introduction</Typography>
                <Typography sx={paragraphText}>
                    These Terms of Use establish a legally binding agreement between you and OrientCare. By accessing and using the OrientCare website and its related services you acknowledge, comprehend, and consent to abide by these Terms of Use and applicable laws and regulations. If you disagree with these terms or are unable to comply with them, please discontinue your use of the website now and in the future. Additionally, we reserve the right, at our sole discretion, to modify these Terms of Use at any time. It is your responsibility to verify any updates to these conditions. Your continued use of the website after we post any changes indicates your acceptance of the modified terms.<br />
                    <br />
                    Certain websites might possess supplementary terms and conditions regulating their usage or necessitate your engagement in a written contract with us, like an End User License Agreement. Any provisions found in a separate written agreement or extra terms posted in connection with a website will be integrated into these Terms, thereby becoming a component of your agreement with us. In case of any disagreement, the provisions outlined in another written agreement will take precedence, followed by any additional published terms.<br /><br />
                    OrientCare will not be liable to you for the following loss or damage (including costs or expenses relating to or arising out of such loss or damage) whether arising from contract, tort (including negligence), breach of statutory duty, contribution or otherwise, and whether or not has been made aware of the possibility of such loss or damage which might arise from the use of this website or any of the information contained therein:<br />
                    Indirect or consequential loss; loss of revenue, business, profits, interest or anticipated savings<br />
                    Loss of goodwill or reputation<br />
                    Loss of or damage to records or data including, but not limited to, any costs of regenerating or restoring any lost or damaged records or data<br />
                    Penalties, fines or other sanctions imposed by any governmental or other regulatory body<br />
                    Third party claims for loss or damage or other compensation
                    Any loss or damage relating to or arising out of any Content you download or otherwise obtain through the Site<br />Any loss or damage to your computer or other computer systems that results from your downloading any of the Content or otherwise through your use of the Site
                    <br />
                </Typography>

                <Typography style={{ textAlign: 'left', fontSize: '15px', color: "#8A8A8A" }}>
                    Privacy Policy Please read our <span style={{ color: "#DE414A" }}>

                        <Link
                            href="https://mrcool.com/privacy-policy/"
                            style={{
                                color: 'red',
                                textDecoration: 'none',
                                height: '100%',
                                borderBottom: '3px solid transparent'
                            }}
                        >
                            privacy policy
                        </Link></span> for more information.
                </Typography>
                <Typography sx={paragraphText}>
                    <br />
                    III. Submissions
                    <br />
                    You can submit questions, comments, feedback, suggestions, ideas, plans, notes or other information about OrientCare or our products through our Website or provided to OrientCare by email or otherwise, such submission will not be confidential information and will become the sole property of OrientCare which has exclusive rights, including all intellectual property rights, and reserves the right to use and distribute unlimited submissions for commercial or other purposes without credit or compensation to you.<br /><br />
                    Our Content<br />
                    All content on the Website (images, text, brands, logos, design, code, etc.) is owned by or licensed to us and is protected by copyright, trademark, patent, or other intellectual property laws. Use or access to our Website does not give you ownership or license of such content. You may not use the content on our Website without the express permission of the content owner. Also, if any of the content contains a legal notice, do not modify, delete, or obscure this notice.<br />The Website displays trademarks, service marks, logos, or other source designations. All trademarks are registered or unregistered trademarks OrientCare, its affiliates, or its licensors or content providers. All trademarks are the exclusive property of their respective owners. In addition, accessing and using the Website does not imply or otherwise grant ownership of the license, use rights, or trademarks.<br />We may change, delete, or add content on our Website without notice to you.<br /><br /><br />Cookies<br />
                    We employ the use of cookies. By accessing the Website, you agreed to use cookies in agreement with the Website’s Privacy Policy. Most interactive websites use cookies to let us
                    retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of
                    certain areas to make it easier for people visiting our website<br /><br />Use of Our Services<br />In order to access some features
                    of our Services, you may have to obtain an account. An account will be assigned through the Dealer
                    Sign Up process, for more information.<br /><br /><span style={{ fontWeight: 'bold' }}>You may not:</span><br />Use another User’s account without
                    permission, or solicit, collect or use the login credentials of other users; or Sell, transfer, license
                    or assign your account, username, or any account rights.<br />When creating your account, you must
                    provide true, current, accurate and complete information, and you must update your information as
                    necessary to maintain its truth and accuracy. You are responsible for keeping your password secure
                    and you are responsible for the activity that occurs on your account. You may be liable for our losses
                    or the losses of others due to unauthorized use. If you become aware of or suspect any breach of security
                    or unauthorized use of your password or of your account, you should notify us immediately at the address
                    listed at the bottom of this page.<br />You agree you have the legal right and capacity to enter into these
                    Terms and to comply with all laws, rules and regulations (e.g., federal, state, local and provincial)
                    applicable to your use of our Website and any content you submit, post or display (e.g., images, photographs,
                    graphics, audio, video, text, information, works of authorship, applications, links, and other communications,
                    content or materials) including without limitation, copyright laws and export laws.<br />Circumvent, disable or otherwise interfere with any security-related features of our Website or features that prevent or restrict use or copying of any Materials and User Submissions or enforce limitations on use of our Website and the Materials or User Submissions;<br />Engage in any
                    activity that interferes with or disrupts our Website (or the servers and networks which are connected to our Website), including by transmitting any worms, viruses, spyware, malware or any other code of a destructive or disruptive nature;<br />
                    Inject content or code or otherwise alter or interfere with the way any part of our Website is
                    rendered or displayed in a user’s browser or device;<br />
                </Typography><br />
                <Typography sx={{ fontSize: '15px', fontWeight: '700', color: '#8A8A8A' }}>Change, alter or modify any part of our Website for any reason;<br /></Typography><br />
                <Typography mb={'3rem'} sx={paragraphText}>Use or launch any type of automated system, including but not limited to, “robots,” “spiders,” or “offline readers,” etc., that accesses our Website in a manner that sends more request messages to our servers in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser;<br />Access (or attempt to access) any of our Services, including Submissions, forms, data, documentation, images, and other Website functionality, by any means other than through the interfaces that are provided by us; or use our Website for any illegal or unauthorized purpose<br /><br /><br />VII. Revisions to Terms<br />OrientCare shall have the right at any time to change or modify these Terms or to impose new Conditions. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including, but not limited to, posting the changed or modified Terms and Conditions on this website or otherwise made available electronically via web application updates, push notifications, and/or emails. Any use or access of the Website by you after such notice shall be deemed to constitute acceptance by yourself of such changes, modifications or additions.<br />These Terms will remain in full force and effect so long as you continue to access or use our Services, or until terminated in accordance with the provisions of these Terms.<br />At any time, we may:<br />suspend, withdraw, discontinue, change, or terminate these Terms and your rights to access or use our Website for any reason, particularly if we believe that you have restricted or inhibited any other user from using our Website or in any other way have used our Website in violation of these Terms. Upon termination of these Terms, your authorization to use our Website automatically terminates and you must immediately destroy any downloaded or printed Materials. <br /><br />
                    VIII. Disclaimer of Warranty; Limitation of Liability<br />(a) You expressly agree that use of this website is at your sole risk. Neither OrientCare affiliates nor any of their respective employees, agents, third party content providers or licensors warrant that this website will be uninterrupted or error free; nor do they make any warranty as to the results that may be obtained from use of this website, or as to the accuracy, reliability or content of any information, service, or merchandise provided through this website.<br />(b) This Website is provided on an “as is” basis without warranties of any kind, either express or implied, including, but not limited to, warranties of title or implied warranties of merchantability or fitness for a particular purpose, other than those warranties which are implied by and incapable of exclusion, restriction or modification under the laws applicable to this agreement.<br />(c). In no event will OrientCare be liable for any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortious behavior, negligence, or under any other cause of action. You specifically acknowledge that OrientCare is not liable for the defamatory, offensive or illegal conduct of other users or third-parties and that the risk of injury from the foregoing rests entirely with you.<br />
                    (d) In no event will OrientCare, or any person or entity involved in creating, producing, maintaining or distributing this website or the website software, be liable for any damages, including, without limitation, direct, indirect, incidental, special, consequential or punitive damages arising out of the use of or inability to use this website. You hereby acknowledge that the provisions of this section shall apply to all content on this website.<br />(e) In addition to the terms set forth above neither, OrientCare, nor its affiliates, information providers or content partners shall be liable regardless of the cause or duration, for any errors, inaccuracies, omissions, or other defects in, or untimeliness or unauthenticity of, the information contained within this website, or for any delay or interruption in the transmission thereof to the user, or for any claims or losses arising therefrom or occasioned thereby. None of the foregoing parties shall be liable for any third-party claims or losses of any nature, including, but not limited to, lost profits, punitive or consequential damages.<br />OrientCare, its affiliates, information providers or content partners shall have no liability for investment or business decisions based on any information provided and recommends you obtain expert advice prior to any such decisions. Neither OrientCare, nor its affiliates, information providers or content partners warrant or guarantee the timeliness, sequence, accuracy or completeness of this information. Additionally, there are no warranties as to the results obtained from the use of the information.<br />(f) Because some states do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. In such states, OrientCare’s liability is limited to the greatest extent permitted by law.<br />
                    (f) Because some states do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. In such states, OrientCare’s liability is limited to the greatest extent permitted by law.<br /><br />
                    <span style={{ fontWeight: 'bold' }}>Personal Information, Monitoring, Logging and Data Utilization</span><br />
                    (A) Any personally identifiable information you may provide to OrientCare via this website is protected by the Privacy Policy associated with this website. OrientCare does not want you to, and you should not, send any confidential or proprietary information to OrientCare via the website.<br />
                    <br />
                    You agree that any information or materials that you or individuals acting on your behalf provide to OrientCare will not be considered confidential
                    or proprietary. By providing any such information or materials to OrientCare, you grant to OrientCare an unrestricted, irrevocable, worldwide,
                    royalty-free license to use, reproduce, display, publicly perform, transmit and distribute such information and materials, and you further agree
                    that OrientCare is free to use any ideas, concepts or know-how that you or individuals acting on your behalf provide to OrientCare. You further
                    recognize that OrientCare does not want you to, and you warrant that you shall not, provide any information or materials to OrientCare that is
                    defamatory, threatening, obscene, harassing, or otherwise unlawful, or that incorporates the proprietary material of another.<br /><br />
                    (B) OrientCare shall have the right, but not the obligation, to monitor the content and/or use of this website to determine compliance with this Agreement and any operating rules established by OrientCare and to satisfy any law, regulation or authorized government request. OrientCare shall have the right in its sole discretion to refuse access or limit access to you, and to edit, refuse to post or remove any material submitted to or posted on this website. Without limiting the foregoing, OrientCare shall have the right to remove any material that OrientCare, in its sole discretion, finds to be in violation of the provisions hereof or otherwise objectionable. By use of OrientCare websites, servers, processors or networks, you acknowledge and agree to the fact that OrientCare shall have the unrestricted right, but not the obligation, to log web addresses and/or utilize other information and/or data relating to use of the website as described in our Privacy Policy, and including, but not limited to the following legitimate business purposes:
                    <br /><br />
                    (a) to provide better support, websites, services and/or products to users of its website, products and/or services<br /><br />
                    (b) to verify compliance with the terms of this Agreement<br /><br />
                    (c) for use by OrientCare for statistical or other analysis of the collective characteristics and behavior of its users<br /><br />(d) to backup website, user and other data or information and/or provide remote support and/or restoration,<br /><br />
                    (e) to provide or undertake: usage analysis, histories or trending; engineering analysis, histories or trending; failure analysis, histories or trending; warranty analysis, histories or trending; energy analysis, histories or trending; predictive analysis, histories or trending; service analysis, histories or trending; product usage analysis, histories or trending; and/or other desirable analysis, histories or trending, and<br /><br />
                    (f) to otherwise understand and respond to the needs of the users of OrientCare’s website, products and/or services. Such mining may entail the use of “cookies”, “IP addresses”, or other numeric codes or tracking mechanisms to identify a computer and/or user. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. Users who do not accept cookies may be unable to fully avail themselves of OrientCare’s websites, products and/or services and may have to re-enter certain repetitive data each time that data is needed.
                    <br /><br /><br />Effective Date: August 15, 2023       Last Updated Date: August 15, 2023
                </Typography>
            </Box>
            <Footer />
        </>
    )
}

export default index