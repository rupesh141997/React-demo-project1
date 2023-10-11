import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../components/Bottoms.css'
import xyz from "../images/c1.png";
import abc from "../images/c2.png";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


function Bottoms()
{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 822,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]   

      }
// ------------------------react multi --------------------------------------

// const data=["This is the data for block 1","This is the data for block 1",
// "This is the data for block 1","This is the data for block 1"]

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

    
     
      return(
        <div className="main-3"> 
        <div className="b-main">
            <h2 className="h"> Customer Feedback  </h2>
                <div className="bmain-inner"> 
                <Slider {...settings}>
                  
                    <div className="box">
                         
                         
                        <p>Lorem ipsum dolor sit amet, 
                          all consectetuer adipiscing elit. al
                          lAenean commodo ligula eget dolor. A
                          enean massa. Cum sociis natoque penatibus et 
                          magnis dis parturient montes, nascetur rid
                          iculus mus. for a 
                          Donec quam felis, ultricies nec, pellentesque.
                        </p>
                      
                    </div>
                    <div className="box">
                         
                        <p>Lorem ipsum dolor sit amet, 
                          all consectetuer adipiscing elit. al
                          lAenean commodo ligula eget dolor. A
                          enean massa. Cum sociis natoque penatibus et 
                          magnis dis parturient montes, nascetur rid
                          iculus mus. for a 
                          Donec quam felis, ultricies nec, pellentesque.
                        </p>
                         
                    </div>
                    <div className="box">
                         
                        <p>Lorem ipsum dolor sit amet, 
                          all consectetuer adipiscing elit. al
                          lAenean commodo ligula eget dolor. A
                          enean massa. Cum sociis natoque penatibus et 
                          magnis dis parturient montes, nascetur rid
                          iculus mus. for a 
                          Donec quam felis, ultricies nec, pellentesque.
                        </p>
                         
                         
                    </div>
                    <div className="box">
                        
                         
                        <p>Lorem ipsum dolor sit amet, 
                          all consectetuer adipiscing elit. al
                          lAenean commodo ligula eget dolor. A
                          enean massa. Cum sociis natoque penatibus et 
                          magnis dis parturient montes, nascetur rid
                          iculus mus. for a 
                          Donec quam felis, ultricies nec, pellentesque.
                        </p>
                         
                    </div>
                    <div className="box">
                        <h3>5</h3>
                    </div>
                    <div className="box">
                        <h3>6</h3>
                    </div>
                    <div className="box">
                        <h3>7</h3>
                    </div>
                    <div className="box">
                        <h3>8</h3>
                    </div>
                </Slider>

                </div>

        </div>
  
        </div>

        // ------------------------------------react multi ------------------

// <Carousel responsive={responsive}>
//   {
//     data.map((singleData)=>{
//       return(<div className="card">{singleData}</div>)
//     })
//   }
  
// </Carousel>

             
    

    )
      }


export default Bottoms;