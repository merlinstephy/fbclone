import React from "react";
import "./Widget.css";


function Widget() {
  return (
    <div className="contact">
    <div className="Contact-heading mb-3">

<h5><b>Contacts</b></h5>
</div>
    <div className="list mb-3 m-3">
<div className="contact-list">
<img src="/images/avatar5.png"  alt="" style={{width:"40px" ,height : "40px"
,borderRadius:"50%", margin:'5px'}}/>
    Adriel
</div>
<div className="contact-list mb-2">
<img src="/images/avatar3.jpg" alt="" style={{width:"40px" ,height : "40px", margin:'5px'
,borderRadius:"50%"}}/>
Felix
</div>
<div className="contact-list mb-2">
<img src="/images/avatar2.png"  alt="" style={{width:"40px" ,height : "40px"
,borderRadius:"50%", margin:'5px'}}/>
Helen
</div>
<div className="contact-list mb-2">
<img src="/images/avatar4.png"  alt="" style={{width:"40px" ,height : "40px"
,borderRadius:"50%", margin:'5px'}}/>
Nandha
</div>
<div className="contact-list mb-2">
<img src="/images/avatar1.jpg"   alt="" style={{ 
width:"40px" ,height : "40px",borderRadius:"50%", margin:'5px'}}/>
kothai
</div>
</div>
</div>
      
  );
}

export default Widget;
