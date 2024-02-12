import React, { useRef } from "react";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
export default function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    let sendBtn = e.target[3];
    e.preventDefault();
    console.log(e);
    sendBtn.innerText = "Sending..";
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          sendBtn.classList.add("btn-success");
          sendBtn.innerHTML = "Sent!";
          sendBtn.disabled = true;
        },
        (error) => {
          console.log(error);
          sendBtn.classList.add("btn-danger");
          sendBtn.innerText = "ERROR!";
        }
      );
  };
  return (
    <>
      <div className="contact-page">
        <div className="title">
          <header>
            <Icon icon="bitcoin-icons:node-2-connections-outline" /> Contact
          </header>
          <hr className="text-white h-100" />
        </div>
        <div className="contentSection">
          {/* contact_form */}
          <div className="left_side d-flex justify-content-center flex-column align-items-center">
            <div className="contact_form p-4" style={{ width: "90%" }}>
              <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="from_name"
                    name="from_name"
                    placeholder="Name"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="from_name">
                    <Icon icon="gg:rename" /> Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="from_email"
                    name="from_email"
                    placeholder="name@example.com"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="from_email">
                    <Icon icon="line-md:email-twotone" /> Email address
                  </label>
                </div>
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Your Message Here..."
                    autoComplete="off"
                    minLength={10}
                    required
                  />
                  <label htmlFor="message">
                    <Icon icon="tabler:message-bolt" /> Message
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Send <Icon icon="cil:send" />
                </button>
              </form>
            </div>
            <hr />
            {/* contact_details */}
            <div className="contact_details m-4 p-4" style={{ width: "90%" }}>
              <h3>
                <Icon icon="tabler:message-bolt" /> Contact Details
              </h3>
              <br />
              <p>
                <Icon icon="mdi:super-chat-for-good" /> Thanks a bunch for
                checking out IEEE-WIE-CRCE! Feel free to reach out to us via
                email, WhatsApp, or a call. Here are the awesome people you can
                connect with!
              </p>
              <p>
                <Icon icon="line-md:phone-call-twotone-loop" /> Aditya:{" "}
                <a
                  href="tel:7620335644"
                  className="text-decoration-underline text-dark"
                >
                  +917620335644
                </a>
              </p>
              <p>
                <Icon icon="line-md:phone-call-twotone-loop" /> Shivaprasad:{" "}
                <a
                  href="tel:7558220919"
                  className="text-decoration-underline text-dark"
                >
                  +917558220919
                </a>
              </p>
              <p>
                <Icon icon="line-md:email-twotone" /> Email:
                <a
                  href="mailto:ieeecrce.24@gmail.com"
                  className="text-decoration-underline text-dark"
                >
                  ieeecrce.24@gmail.com
                </a>
              </p>
              <p>
                <Icon icon="line-md:my-location-loop" /> Fr. Agnel Ashram,
                Bandstand, Bandra (W), Mumbai 400050. MH, IN
              </p>
            </div>
          </div>
          <div className="collegeLocation">
            <iframe
              title="College Location"
              src="https://shorturl.at/moGH4"
              allowFullScreen={true}
              height={450}
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3"
            ></iframe>
          </div>
        </div>
        <hr />
        <p>Developed with ❤ by IEEE-WIE Team!</p>
        <p>
          Copyright <Icon icon="ic:twotone-copyright" />
          {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </>
  );
}