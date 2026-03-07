import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
    "service_yk9lwgg",
    "template_c0n9i3p",
     form.current,
     "6v7oq4mwjy3xP8e"
)
    
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.log("EmailJS error:", error);
      alert("Failed to send message");
    });
  };

  return (
   <section id="contact" className="contact-section">

      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-box">

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            rows="5"
            name="message"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>

      </form>

    </section>
  );
}