"use client";

// Import useState from 'react' library
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../homepage/home.module.css";
import Image from "next/image";
import robo from "../../../public/robo.png";
import img1 from "../../../public/imgtxt.png";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import robo2 from "../../../public/robo2.png";
import Sparkles from "react-sparkle";
import crs1 from "../../../public/course1.png";
import crs2 from "../../../public/course2.png";
import crs3 from "../../../public/course3.png";
import robo3 from "../../../public/robo3.png";
import team1 from "../../../public/team2.png";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import {
  CForm,
  CCol,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
  CFormTextarea,
} from "@coreui/react";
import "../../app/globals.css";
import Navbar from "../components/Navbar/page";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function home() {
  return (
    <section id={styles.home}>
      <Link href={"#home"}>
        <FaSquareWhatsapp className={styles.whatslogo} />{" "}
      </Link>
      <Link href={"#home"} id="scrollUpLink" style={{ display: "none" }}>
        <BsArrowUpSquareFill className={styles.upicon} />
      </Link>

      <div className="container">
        <Sparkles
          color="orange"
          count={20}
          minSize={4}
          maxSize={12}
          overflowPx={0}
          fadeOutSpeed={5}
          flicker={false}
        />
        <div className="row">
          <div className={`col-lg-8 ${styles.homecont}`}>
            <div className={styles.newmov}>
              <div className={styles.newsmore}>
                <h5>Know more</h5>
              </div>
              <div className={styles.newscont}>
                <h5>Picamp starts on my 6 2024</h5>
              </div>
            </div>
            <div className={styles.homehead}>
              <h1>
                Start your Robotics / AI <br /> Journey from Pibots Academy
              </h1>
              <p>
                World’s Favorite table top teaching team for your best career
              </p>
            </div>
            <div>
              <a href="#abouthome">
                <div className={styles.abtbtn}>
                  <h5>About us</h5>
                  <IoIosArrowDropright className={styles.btnicon} />
                </div>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 ${styles.imghome}`}>
            <Image alt="home image" className={styles.roboimg} src={robo} />
            <div className={styles.homecircle}></div>
            <Image alt="home image" className={styles.homeimg} src={img1} />
          </div>
        </div>
      </div>

      <div id={styles.abouthome}>
        <div className={styles.aboutcont}>
          <div className="container">
            <h2>WELCOME TO</h2>
            <h1>PiBOTS ACADEMY</h1>
            <p>
              PiBots Academy: Igniting Innovation for All. We offer dynamic
              programs, expert mentorship, and hands-on experiences to inspire
              creativity and curiosity in learners of all ages. Join us and
              unleash your potential in the world of cutting-edge technology and
              innovation!
            </p>
            <div>
              <h6>
                Course <FaLongArrowAltRight className={styles.arrow2} />{" "}
              </h6>
            </div>
          </div>
          <Image alt="home image" className={styles.roboimg2} src={robo2} />
        </div>
      </div>
      <section id="course">
        <div id={styles.coursehome}>
          <div className={styles.aboutcont}>
            <div className="container">
              <h2>Courses</h2>
              <h5 className={styles.coursesub}>Our featured Courses</h5>
              <br />
              <br />
              <div className="row">
                <div className={` col-lg-4 col-12 ${styles.coursecard}`}>
                  <Image className={styles.crsimg} src={crs1} alt="" />
                </div>
                <div className={` col-lg-4 col-12 ${styles.coursecard}`}>
                  <Image className={styles.crsimg} src={crs2} alt="" />
                </div>
                <div className={` col-lg-4 col-12 ${styles.coursecard}`}>
                  <Image className={styles.crsimg} src={crs3} alt="" />
                </div>
              </div>

              <div style={{ paddingTop: "4rem" }}>
                <h6>
                  Happy moments{" "}
                  <FaLongArrowAltRight className={styles.arrow2} />{" "}
                </h6>
              </div>
            </div>
            <Image alt="home image" className={styles.roboimg3} src={robo3} />
          </div>
        </div>
      </section>

      <div id={styles.galleryhome}>
        <div className="container">
          <div className={styles.galleryhead}>
            <h2>Gallery</h2>
            <h5 className={styles.coursesub}>Our Valuable moments</h5>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className={styles.imgcard}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  className="w-100 shadow-1-strong rounded "
                  alt="Boat on Calm Water"
                />
              </div>

              <div className={styles.imgcard}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                  className="w-100 shadow-1-strong rounded "
                  alt="Wintry Mountain Landscape"
                />
              </div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className={styles.imgcard}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                  className="w-100 shadow-1-strong rounded "
                  alt="Mountains in the Clouds"
                />
              </div>

              <div className={styles.imgcard}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  className="w-100 shadow-1-strong rounded "
                  alt="Boat on Calm Water"
                />
              </div>
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className={styles.imgcard}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                  className="w-100 shadow-1-strong rounded "
                  alt="Waves at Sea"
                />
              </div>

              <div className={styles.imgcard}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                  className="w-100 shadow-1-strong rounded "
                  alt="Yosemite National Park"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.teamhome}>
        <div className={styles.teamhead}>
          <h2>Team</h2>
          <h5 className={styles.coursesub}>Our Backend</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.member}>
                <h3>Designation</h3>
                <h5>
                  <a href="http://">
                    <FaInstagramSquare />
                  </a>
                  <a href="http://">
                    <IoLogoLinkedin />
                  </a>
                </h5>
                <Image
                  src={team1}
                  className={styles.teamimg}
                  alt="team member"
                />
              </div>
              <h2>Full name </h2>
            </div>
            <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.member}>
                <h3>Designation</h3>
                <h5>
                  <a href="http://">
                    <FaInstagramSquare />
                  </a>
                  <a href="http://">
                    <IoLogoLinkedin />
                  </a>
                </h5>
                <Image
                  src={team1}
                  className={styles.teamimg}
                  alt="team member"
                />
              </div>
              <h2>Full name </h2>
            </div>
            <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.member}>
                <h3>Designation</h3>
                <h5>
                  <a href="http://">
                    <FaInstagramSquare />
                  </a>
                  <a href="http://">
                    <IoLogoLinkedin />
                  </a>
                </h5>
                <Image
                  src={team1}
                  className={styles.teamimg}
                  alt="team member"
                />
              </div>
              <h2>Full name </h2>
            </div>
            <div className={`col-lg-3 col-12 ${styles.teamcard}`}>
              <div className={styles.member}>
                <h3>Designation</h3>
                <h5>
                  <a href="http://">
                    <FaInstagramSquare />
                  </a>
                  <a href="http://">
                    <IoLogoLinkedin />
                  </a>
                </h5>
                <Image
                  src={team1}
                  className={styles.teamimg}
                  alt="team member"
                />
              </div>
              <h2>Full name </h2>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.contact}>
        <div className={styles.teamhead}>
          <h2>contact Us</h2>
          <h5 className={styles.coursesub}>Reach us</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-lg-4 col-12 ${styles.conticon}`}>
              <div className={styles.conticon1}>
                <div className={styles.iconcont}>
                  <h1>
                    <MdEmail className={styles.icon} />
                  </h1>
                </div>
                <div className={styles.continfo}>
                  <h2>Email</h2>
                  <p>mail@pibots.in</p>
                </div>
              </div>
              <div className={styles.conticon1}>
                <div className={styles.iconcont}>
                  <h1>
                    <FaPhoneAlt className={styles.icon} />
                  </h1>
                </div>
                <div className={styles.continfo}>
                  <h2>Call</h2>
                  <p>+91 9188411223</p>
                </div>
              </div>
              <div className={styles.conticon1}>
                <div className={styles.iconcont}>
                  <h1>
                    <IoLocationSharp className={styles.icon} />
                  </h1>
                </div>
                <div className={styles.continfo}>
                  <h2>Location</h2>
                  <p>Areekode , Malappuram</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-8 col-12 ${styles.contform}`}>
              <CForm
                action="https://formspree.io/f/xbjerael"
                method="POST"
                className="row g-3"
              >
                <CCol md={6}>
                  <CFormInput
                    className={styles.label}
                    name="name"
                    label="Name"
                    type="text"
                    id="inputEmail4"
                    placeholder="Your Name"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    name="email"
                    label="Email"
                    type="email"
                    id="inputEmail4"
                    placeholder="Your Email"
                  />
                </CCol>
                <CCol xs={12}>
                  <CFormInput
                    name="subject"
                    label="Subject"
                    type="text"
                    id="inputMessage"
                    placeholder="your subject here"
                  />
                </CCol>
                <CCol xs={12}>
                  <CFormTextarea
                    name="message"
                    id="floatingTextarea"
                    label="Message"
                    placeholder="Your message"
                  ></CFormTextarea>
                </CCol>

                <CCol
                  xs={12}
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <CButton
                    style={{ backgroundColor: "transparent", color: "#ff6a00" }}
                    type="submit"
                  >
                    Send <FaLongArrowAltRight className={styles.arrow2} />{" "}
                  </CButton>
                </CCol>
              </CForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
