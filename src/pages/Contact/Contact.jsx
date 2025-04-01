import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus("Sending...");

    try {
      await axios.post(`${baseUrl}/send-email`, formData);
      setFormStatus("Email sent successfully!");
      setFormData({ name: "", email: "", comment: "" });
    } catch (error) {
      setFormStatus("Error sending email. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="contact">
        <div className="contact__container">
          <h1 className="contact__title">Contact Me</h1>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__label" htmlFor="name">
              Name:
            </label>
            <input
              className="contact__field"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="contact__label" htmlFor="email">
              Email:
            </label>
            <input
              className="contact__field"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="contact__label" htmlFor="comment">
              Comment:
            </label>
            <textarea
              className="contact__field"
              id="comment"
              name="comment"
              rows="7"
              value={formData.comment}
              onChange={handleChange}
              required
            />

            <button className="contact__button" type="submit">
              Submit
            </button>
          </form>

          {formStatus && <p className="contact__status">{formStatus}</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
