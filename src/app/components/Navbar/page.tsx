"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import nav from "../../../../public/nav.png";
import { FaBars } from "react-icons/fa6";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../../components/Navbar/navbar.css"; // Assuming you have styles defined here

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`navbarsection ${scrollPosition > 5 ? "scrolled" : ""}`}
    >
      <MDBNavbar expand="lg" className="transparent">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#home1">
            <Image className="navimg" alt="" src={nav} />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            style={{ border: "none" }}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <FaBars style={{ color: "white" }} />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic} className="justify-content-end">
            <MDBNavbarNav className="flex mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setOpenBasic(!openBasic)} aria-current="page" href="#about1">
                  About us
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setOpenBasic(!openBasic)} href="#course">Course</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setOpenBasic(!openBasic)} href="#gallery1">Gallery</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setOpenBasic(!openBasic)} href="#team1">Team</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => setOpenBasic(!openBasic)} href="#contact1">Contact us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </section>
  );
}
