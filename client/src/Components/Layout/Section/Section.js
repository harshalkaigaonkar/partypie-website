import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Reactsvg } from "./logo.svg";
import "./Section.css";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./Services.css";

const Section = ({ tagLine, service1, service2, service3 }) => {
  return (
    <div className='main'>
      <section style={{ zIndex: "1" }} id='section1'>
        <article className='pa4-ns pa0 ba b--black-10 shadow-5 article'>
          <div className='flex flex-column flex-row-ns'>
            <div className='w-100 w-40-ns pa0 order-1 order-1-ns tc'>
              <h1 className='f1-ns f2 ma4-ns ma1 tc'>{tagLine}</h1>
              <br />
              <h4 className='tc f3  pa1 ttc'>
                <strong>
                  <b>PartyPie</b>
                </strong>{" "}
                is Specialized in Event Planning and Working hard for each of
                Our clients.
              </h4>
              <br />

              <a
                href='#learnMore'
                className='f4-ns f5 link pt3 bg-animate hover-bg-black hover-white w-50 br-pill ba bw1 ph3 pv2 mb2 dib near-black tc'
              >
                Learn More.
              </a>
            </div>
            <div className=' order-2 order-2-ns mb4 mb0-ns w-100 w-60-ns'>
              <Reactsvg />
            </div>
          </div>
        </article>

        <div
          className='pa5-ns mt5-ns ma5-ns br4'
          style={{ backgroundColor: "whitesmoke" }}
          id='learnMore'
        >
          <div>
            <h1
              className='ttc tc f1 f1-ns b pa1 ma1 black head'
              style={{ fontFamily: "Lobster" }}
            >
              <strong className='black'>Services we Provide.</strong>
            </h1>
          </div>
          <div
            className='flex flex-row flex-wrap'
            style={{ fontFamily: "Dancing Script" }}
          >
            <article className='br3 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l center'>
              <h1 className='f2 f2-ns mv0 pa4 tc i'>{service1}</h1>
              <div className='content_img'>
                <img src={pic1} className='db image br3' alt='#' />
                <div className='pa2 ph3-ns pb3-ns'>
                  <p
                    className='f4 black ttc'
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Whether it be home or venue setup it with a theme like your
                    dream...
                  </p>
                </div>
              </div>
            </article>
            <article className='br3 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l center'>
              <h1 className='f2 f2-ns mv0 pt2 pr4 pl4 pb tc i'>{service2}</h1>
              <div className='content_img'>
                <img src={pic2} className='db image br3' alt='#' />
                <div className='pa2 ph3-ns pb3-ns'>
                  <p
                    className='f4 black ttc'
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Be it be a date or a anniversary Special moment require a
                    special arrangement We will arrange that special moment for
                    you...
                  </p>
                </div>
              </div>
            </article>
            <article className='br3 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l center'>
              <h1 className='f2 f2-ns mv0 pa4 tc i'>{service3}</h1>
              <div className='content_img'>
                <img src={pic3} className='db image br3' alt='#' />
                <div className='pa2 ph3-ns pb3-ns'>
                  <p
                    className='f4 black ttc'
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Thinking of events at home, but not sure who will cook? And
                    what to cook Relax we will provide you Specialized chef at
                    your doorstep...
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

Section.propTypes = {
  tagLine: PropTypes.string.isRequired,
  service1: PropTypes.string.isRequired,
  service2: PropTypes.string.isRequired,
  service3: PropTypes.string.isRequired,
};

Section.defaultProps = {
  tagLine: "Make Your Memory Sweet...",
  service1: "Venue Setup",
  service2: "Special Arrangement",
  service3: "Chef At Home",
};

export default Section;
