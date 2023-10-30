import React  , {useEffect} from 'react'
import './About.css'
import recuritment from '../Home/image/process.png'
import candidate from '../Home/image/candidate.png'
import profile from '../Home/image/profile.png'
import responsive from '../Home/image/responsive.png'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <div className='AboutFirst'  >
       
      <div className='leftFirst'>
<img src={recuritment} className='Aboutimage'/>
      </div>
      <div className='rightFirst'>
      
        <h1>Easy-to-use Recruitment Software</h1>
        <p>No steep learning curves or bloated interfaces. Full Stack learning platform is simple yet powerful; accessible and relevant to all recruiters.</p>
        <ul>
            <li><CheckBoxIcon/><span> Customizable pipeline:</span> Customize your recruitment pipeline based on your process with a slick drag-and-drop interface.</li>
            <li><CheckBoxIcon/><span>Customizable pipeline:</span> Get an overview of your recruitment progresses in one single-board view.</li>
        </ul>
      </div>
    </div>


<div className='AboutSecond' data-aos="fade-up"
 data-aos-offset="100"
//  data-aos-delay="10"
 data-aos-duration="500"
 data-aos-easing="ease-in-out"
 data-aos-mirror="true"
 data-aos-once="false"
 data-aos-anchor-placement="top-center">
       
<div className='leftSecond' >
<h1>AI-Powered Recommendations</h1>
  <p>Full Stack Learning Engine simplifies the whole hiring process by suggesting the best candidates for a selected categories.</p>
  <ul>
      <li><CheckBoxIcon/><span>Matching recommendations: </span>Score candidates' profiles based on job requirements to facilitate your screening process.</li>
      <li><CheckBoxIcon/><span>Candidates' profiles enrichment:</span> Enrich candidates' profiles with LinkedIn and other social media data for better matching recommendations.</li>
  </ul>
</div>
<div className='rightSecond'>

  
  <img src={candidate} className='Aboutimage1'/>
</div>
</div>




<div className='AboutThird' data-aos="fade-right"
 data-aos-offset="100"
//  data-aos-delay="10"
 data-aos-duration="500"
 data-aos-easing="ease-in-out"
 data-aos-mirror="true"
 data-aos-once="false"
 data-aos-anchor-placement="top-center">
       
       <div className='leftThird'>
 <img src={profile} className='AboutThird'/>
       </div>
       <div className='rightThird'>
       
         <h1>Candidates Profiles Enrichment</h1>
         <p>Collect insights beyond resume.Full Stack Learning browses the web in search of data on 20+ social media and public platforms to automatically enrich candidates' profiles.</p>
         <ul>
             <li><CheckBoxIcon/><span> Data enrichment done seamlessly </span> during the candidate creation.</li>
             <li><CheckBoxIcon/><span>20+ social and public platforms:</span> .</li>
         </ul>including LinkedIn, Facebook, Twitter, GitHub, Medium and many more.
       </div>
     </div>


     <div className='AboutFourth' 
     data-aos="fade-down"
     data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
     <div className='leftFourth'>
<h1>Progressive Mobile Application</h1>
  <p>Access Manatal from your computer, phone, or tablet to ensure you never miss any activity, wherever you are.</p>
  <ul>
      <li><CheckBoxIcon/><span>Recruit on the go: </span> Access all Manatal features from all your devices.</li>
      <li><CheckBoxIcon/><span>Receive notifications:</span>  Get notified for reminders, and specific events.</li>
  </ul>
</div>
<div className='righFourth'>

  
  <img src={responsive} className='Aboutimage2'/>
</div>
</div>


</>
  )
}

export default About
