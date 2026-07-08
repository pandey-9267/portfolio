import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { sendMessage } from "../services/contactService";

function Contact() {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Success / Error Message
  const [status, setStatus] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(formData);

      setStatus("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <motion.section
      id="contact"
      className="mt-[80px] mx-4 md:mx-auto max-w-[1280px] py-8 bg-primary-container rounded-3xl text-on-primary"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-white">
            Let's Connect
          </h2>

          <p className="text-lg text-on-primary-container">
            I'm always looking for new opportunities to collaborate and learn.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <Mail className="text-on-secondary-container size-5" />
              </div>

              <span className="text-base text-white">
                abhishekpandey9267@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <MapPin className="text-on-secondary-container size-5" />
              </div>

              <span className="text-base text-white">
                New Delhi, India
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="glass-card p-8 rounded-2xl space-y-4 shadow-xl"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-widest text-on-tertiary-container">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-widest text-on-tertiary-container">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label>Message</label>

            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
            />
          </div>

          {status && (
            <p className="text-center text-white font-medium">
              {status}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl text-sm font-semibold uppercase tracking-widest hover:brightness-105 active:scale-95 transition-all"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;