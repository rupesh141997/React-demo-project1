import React from "react";
import './Midpart.css'
import img1 from "../images/Group 1558.png";
import img2 from "../images/Group 1547.png";
import img3 from "../images/Group 1551.png";
import img4 from "../images/Group 1554.png";
import img5 from "../images/Group 1543.png";
import img6 from "../images/Group 1550.png";




function Midpart(){

 return(
      
     <div className="main-2">
         <div className="main-2-mid">
                     <div className="main-2--head">Our Key Value</div>
                  <div className="main-2-midinner">


                        <div className="main-2-midinner-1">
                                 <div className="part-1">
                                        <img className="imgs" src={img1} alt="" />
                                       <h5>Get noticed by right costomers</h5>
                                       <p>Lorem ipsum dolor sit amet, all consectetuer
                                           adipiscing elit. allAenean commodo ligula eget
                                              dolor. Aenean massa. 
                                       </p>

                                 </div>
                                 <div className="part-2">
                                 <img className="imgs" src={img2} alt="" />
                                    <h5>Get noticed by right costomers</h5>
                                    <p>Lorem ipsum dolor sit amet, all consectetuer
                                           adipiscing elit. allAenean commodo ligula eget
                                              dolor. Aenean massa. 
                                       </p>
                                 </div>
                                 <div className="part-3">
                                 <img className="imgs" src={img3} alt="" />
                                    <h5>Increase chances of deal closure</h5>
                                    <p>Lorem ipsum dolor sit amet, all consectetuer
                                           adipiscing elit. allAenean commodo ligula eget
                                              dolor. Aenean massa. 
                                       </p>
                                 </div>


                        </div>

                        
                        <div className="main-2-midinner-1">
                                    <div className="part-4">
                                          <img  className="imgs2" src={img4} alt="" />
                                          <h5>Profile visitor analytics</h5>
                                          <p>Lorem ipsum dolor sit amet, 
                                          all consectetuer adipiscing elit.
                                          allAenean commodo ligula eget dolor. 
                                          Aenean massa. 
                                          </p>
                                    </div>
                                    <div className="part-5">
                                    <img  className="imgs2" src={img5} alt="" />
                                    <h5>Technology trends of industry</h5>
                                    <p>Lorem ipsum dolor sit amet, 
                                          all consectetuer adipiscing elit.
                                          allAenean commodo ligula eget dolor. 
                                          Aenean massa. 
                                          </p>
                                    </div>

                                    <div className="part-6">
                                    <img className="imgs2" src={img6} alt="" />
                                    <h5>Search analytics</h5>
                                    <p>Lorem ipsum dolor sit amet, 
                                          all consectetuer adipiscing elit.
                                          allAenean commodo ligula eget dolor. 
                                          Aenean massa. 
                                          </p>
                                    </div>
                              
                              </div>

                  </div>

         </div>

     </div>
 )

}

export default Midpart;