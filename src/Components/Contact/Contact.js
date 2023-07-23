import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="div-margin">
      <h1 align="center" className="contact-heading">
        Feel Free to Contact Us
      </h1>
      <iframe
        title="contact-us"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.760855516368!2d90.5125250761035!3d23.612908094039376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b192d788d9ed%3A0x714478552acc249b!2sFit%20%26%20Wear!5e0!3m2!1sen!2sbd!4v1689661774778!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="frame"
      ></iframe>
      <Container style={{ margin: "50px" }}>
        <form
          action="https://formspree.io/f/xzblzzgb"
          method="post"
          className="input-form"
        >
          <input
            className="input-field"
            name="Name"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            autoComplete="off"
          />
          <input
            className="input-field"
            name="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
          />
          <textarea
            name="Message"
            id="message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
          ></textarea>
          <button className="input-field-button" type="submit">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
