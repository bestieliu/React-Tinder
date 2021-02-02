import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function Card(){
    return(
        <div>
            <div className="container-fluid mt-5">      
                <div className="news">
                    <div class="row">
                        <div class="col-sm-9">
                            <h2 class="feature-title">ข่าวทั่วไป</h2>
                                <div class="row">

                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={img1} class="card-img-top" alt="..."></img>
                                                <h5 class="card-title">ประชุมคณะครู ครูพิเศษสอน</h5>
                                                <p class="card-text">ผู้อำนวยการวิทยาลัยเทคนิคตราด พร้อมคณะผู้บริหาร ประชุมคณะครู ครูพิเศษสอน เเละบุคลากร ทางการศึกษา ครั้งที่ 3/2563</p>
                                                <p><a href="#" class="btn btn-success" role="button">รายละเอียด</a></p>
                                            </div>
                                        </div>        
                                        <div class="col-md-4">
                                            <div class="card">
                                            <img src={img2} class="card-img-top" alt="..."></img>
                                            <h5>ประชุมคณะครูจัดตั้งกลุ่มชุมชนการเรียน</h5>
                                            <p>ประชุมคณะครูจัดตั้งกลุ่มชุมชนการเรียนรูทางวิชาชีพ (PLC) ภาคเรียนที่ 1/2563 กลุ่มชุมชนการเรียนรู้วิชาชีพ ครูคอมพิวเตอร์ธุรกิจเเละสามัญสัมพันธ์</p>
                                                <p><a href="#" class="btn btn-success" role="button">รายละเอียด</a></p>
                                        </div>  
                                        </div>  

                                        <div class="col-md-4">
                                            <div class="card">
                                            <img src={img3} class="card-img-top" alt="..."></img>
                                            <h5>ร่วมกับกองทุนเพื่อความเสมอภาคทางการศึกษา</h5>
                                            <p>ร่วมกับกองทุนเพื่อความเสมอภาคทางการศึกษาจัดโครงการอบรมการทำอาหารเพื่ออาชีพ ให้กับนักเรียน กองทุน กสศ. ระดับปวช.
                                            </p>
                                            <p><a href="#" class="btn btn-success" role="button">รายละเอียด</a></p>
                                        </div>
                                        </div>

                                                                                
                                </div>                              
                        </div>   
                        <div className="col-sm-3">
                            <h3 className="feature-title">ข่าวประชาสัมพันธ์</h3>
                            <div className="row">
               
                                            <div class="card">
                                                <img src={img3} class="card-img-top" alt="..."></img>
                                                <h5 class="card-title">ประชุมคณะครู ครูพิเศษสอน</h5>
                                                <p class="card-text">ผู้อำนวยการวิทยาลัยเทคนิคตราด พร้อมคณะผู้บริหาร ประชุมคณะครู ครูพิเศษสอน เเละบุคลากร ทางการศึกษา ครั้งที่ 3/2563</p>
                                                <p><a href="#" class="btn btn-success" role="button">รายละเอียด</a></p>                          
                                            </div>    
                                            <div class="card">
                                                <img src={img3} class="card-img-top" alt="..."></img>
                                                <h5 class="card-title">ประชุมคณะครู ครูพิเศษสอน</h5>
                                                <p class="card-text">ผู้อำนวยการวิทยาลัยเทคนิคตราด พร้อมคณะผู้บริหาร ประชุมคณะครู ครูพิเศษสอน เเละบุคลากร ทางการศึกษา ครั้งที่ 3/2563</p>
                                                <p><a href="#" class="btn btn-success" role="button">รายละเอียด</a></p>                          
                                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;