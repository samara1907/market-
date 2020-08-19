import React from 'react';
import './Clients.css';
import Navbar from '../Navbar/Navbar';

const Clients =()=>{
    return(
			<div>
            <Navbar/>
	    	<div className="first-title">
			<h1>HAPPY CLIENTS</h1>
			<p>We are explain who is using our business solutions</p>
	   	 </div>
    	 <div className="main-content">
       	 <div className="section">
	   	 <div className="panel-1">
			<img src="http://up.iraq-android.com/do.php?img=37" alt="HTML5 Icon"/>
	  	  <p><span className="quote-1">&#147;</span> Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever sunce the 1500s;when an unknown printer took a galley of type and scrambled it to make <span className="quote-2">&#x93;</span></p>
			<a href="#">DARWIN MICHLE,</a> <span className="job-title">PROJECT MANAGER</span>
    	 </div>
     	<div className="panel-2">
		<img src="http://up.iraq-android.com/do.php?img=38" alt="HTML5 Icon"/> 
	    <p><span className="quote-1">&#147;</span> Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever sunce the 1500s;when an unknown printer took a galley of type and scrambled it to make <span className="quote-2">&#x93;</span></p>
		<a href="#">Madam Elisabath,</a> <span className="job-title">Creative Director</span>
         </div>
        </div>
 
         <div className="section">
    	<div className="panel-1">
		<img src="http://up.iraq-android.com/do.php?img=39" alt="HTML5 Icon"/> 
		<p><span className="quote-1">&#147;</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.<span className="quote-2">&#x93;</span></p>
		<a href="#">Clips arter,</a> <span className="job-title">Lipsum directer</span> 
     </div>
	
      <div className="panel-2">
		<img src="http://up.iraq-android.com/do.php?img=40" alt="HTML5 Icon"/> 
		<p><span className="quote-1">&#147;</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.<span className="quote-2">&#x93;</span></p>
		<a href="#">zam cristafr,</a> <span className="job-title">manager</span>	
	    </div>
     </div>
         </div>

        </div>        
    )
}
export default Clients;