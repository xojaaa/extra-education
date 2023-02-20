import React from "react";
import {
  BsTelegram,
  BsInstagram,
  BsFillTelephoneFill,
  BsFacebook,
} from "react-icons/bs";
import contacts from "../images/contact-img.png";
import {
  YMaps,
  Map,
  TrafficControl,
  Placemark,
  GeolocationControl,
  FullscreenControl,
  TypeSelector,
} from "@pbe/react-yandex-maps";
import "../css/contact.css";

function Contact() {
  const defaultState = {
    center: [40.938558030187195, 68.76297165465526],
    zoom: 15,
    controls: [],
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-4  contact_text">Biz bilan bog'laning</h1>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <BsTelegram className="icon my-3 telegram" />
              </div>
              <h3 className="text-center card-tex">Telegram</h3>
              <a href="https://t.me/extra_edu">
                <button className="btn btn-success w-100">
                  <b>Bog'lanish</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <BsInstagram className="icon my-3 ins" />
              </div>
              <h3 className="text-center card-tex">instagram</h3>
              <a href="https://www.instagram.com/jamolxoja_ahamadxojayev/">
                <button className="btn btn-success w-100">
                  <b>Bog'lanish</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <BsFillTelephoneFill className="icon my-3 phone" />
              </div>
              <h3 className="text-center card-tex">Telfon</h3>
              <a href="tel:+998998327097">
                <button className="btn btn-success w-100">
                  <b>Bog'lanish</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <BsFacebook className="icon my-3 fase" />
              </div>
              <h3 className="text-center card-tex facebook">Facebook</h3>
              <a href="https://www.facebook.com/jamolxoja.ahmadxojayev?mibextid=ZbWKwL">
                <button className="btn btn-success w-100">
                  <b>Bog'lanish</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row my-4">
        <div className="col-lg-5">
          <img src={contacts} className="h-100 img-fluid" alt="" />
        </div>
        <div className="col-lg-7">
          <YMaps>
            <Map defaultState={defaultState} width={"100%"} height={"65vh"}>
              <Placemark geometry={[40.938558030187195, 68.76297165465526]} />
              <TypeSelector
                options={{
                  float: "right",
                }}
              />
              <FullscreenControl />
              <GeolocationControl
                options={{
                  float: "left",
                }}
              />

              <TrafficControl
                options={{
                  float: "right",
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}

export default Contact;
