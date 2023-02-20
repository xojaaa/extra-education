import React from "react";
import Slider from "react-slick";
import foto1 from '../images/photo_2021-04-02_23-19-50.jpg'
import foto2 from '../images/photo_2022-11-27_08-49-38.jpg'
import foto3 from '../images/photo_2022-11-27_12-42-55.jpg'
import foto4 from '../images/photo_2022-11-27_12-42-56.jpg'
import foto5 from '../images/photo_2022-11-27_12-42-58.jpg'
import foto6 from '../images/photo_2022-11-27_12-42-59.jpg'
import '../css/about.css'


function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <h1 className="biz_haqimizda">Biz  <span className="text-danger">Haqimizda</span></h1>
          <div className="col-lg-6 p-0">
            <Slider {...settings}>
              <div >
              <img src={foto1} className='img-fluid' alt="" />
              </div>
              <div>
              <img src={foto3} className='img-fluid' alt="" />
              </div>
              <div>
              <img src={foto2} className='img-fluid' alt="" />
             
              </div>
              <div>
              <img src={foto4} className='img-fluid' alt="" />
              </div>
              <div>
              <img src={foto5} className='img-fluid' alt="" />
              </div>
              <div>
              <img src={foto6} className='img-fluid' alt="" />
              </div>
            </Slider>
          </div>

          <div className="col-lg-6 ">
            <hr className="mt-0"/>
            <h1 className="text-center extra_info text-danger   ">Extra bu... </h1>
            <hr />
            <p>
                Extra 2018-yilda tashkil topgan. Extrada barcha kurslar va sifatli ta'lim mavjud
                Mutaxasislarimiz oliy toyfali tajribali o'qtuvchilar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
