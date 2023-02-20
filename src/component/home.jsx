import React from "react";
import Slider from "react-slick";
import { SlCalculator } from "react-icons/sl";
import { SlChemistry } from "react-icons/sl";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import Foto from "../images/Untitled-1 (2).jpg";
import Toy from "../images/photo_2023-01-11_14-32-03.jpg";
import "../css/home.css";

function Home() {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="container-fluid p-0">
          <Slider {...settings} className="sliders">
            <div className="bg1">
              <div className="container p-0">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="bg1Text">
                      O'qishni qulay muhitda
                      <br /> va tajribali O'qtuvchilardan o'rganing
                    </h1>

                    <code className="bg1Text2">
                      Bilimsiz kishiga ish yo'q, Ilimsiz kishiga osh yo'q.
                    </code>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg2">
              <div className="container p-0">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="bg2Text">
                      O’zingiz istagan tezlikda va vaqtda ta’lim oling.
                      Muvaffaqiyatli marraga yetib borishingiz to’liqligicha
                      o’zingizga bog’liq
                    </h1>

                    <code className="bg1Text2">
                      Kitob ko'rmagan kalla - giyoh unmagan dala.
                    </code>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg3">
              <div className="container p-0">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="bg2Text">
                      Bizning intensiv ta’lim dasturimiz bo’yicha ta’lim oling.
                      Ta’lim bilan muvaffaqiyatli marraga tezroq erishasiz.
                    </h1>
                    <code className="bg1Text2">
                      Hozir harakatni boshla, Bu sening kelajaging
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center kurs">Extra Education Kurslar</h1>
                <div class="box-container">
                  <div class="box">
                    <SlCalculator className="iconkurs" />
                    <h3 className="pt-3">Matematika</h3>
                    <p>Yuqori darajali Talim</p>
                  </div>

                  <div class="box">
                    <SlChemistry className="iconkurs" />
                    <h3 className="pt-3">Kimyo</h3>
                    <p>Yuqori darajali Talim</p>
                  </div>

                  <div class="box">
                    <RiMicroscopeLine className="iconkurs" />
                    <h3 className="pt-3">Biyalogiya</h3>
                    <p>Yuqori darajali Talim</p>
                  </div>

                  <div class="box">
                    <BsTranslate className="iconkurs" />
                    <h3 className="pt-3">Ingiliz tili</h3>
                    <p>
                      <b>Ielts</b> darajali Talim
                    </p>
                  </div>

                  <div class="box">
                    <FaCalculator className="iconkurs" />
                    <h3 className="pt-3">Mentalni Arifmetika</h3>
                    <p>Hisob kitob O'zingiz qiling</p>
                  </div>

                  <div class="box">
                    <IoMdTv className="iconkurs" />
                    <h3 className="pt-3">IT</h3>
                    <p>Zamonaviy kasbga ega bo'ling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="extra">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img className="img-fluid logofoto" src={Foto} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="jamoa">
          <div className="container">
            <div className="row">
              <h1 className="text-center py-3 extraJamo">
                MENTORLARIMIZ JAMOASI
              </h1>
              <hr />
              <div className="col-md-12">
                <Slider {...settings2}>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="box">
                      <div class="tutor">
                        <img src={Toy} alt="" />
                        <div>
                          <h3>Jamolxo'ja Axmadxo'jayev</h3>
                          <span>Biyalogiya</span>
                        </div>
                      </div>
                      <p>
                        <b>Insitut</b> :{" "}
                        <span>Chilonzor Pedagogika insituti</span>
                      </p>
                      <p>
                        <b>Tajriba</b>: <span>7 yil</span>
                      </p>
                      <p>
                        <b>O'quvchialar soni</b>: <span>1208</span>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
