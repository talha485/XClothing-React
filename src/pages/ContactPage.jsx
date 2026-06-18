import React, { useState } from "react";

const contactInfo = [
  { icon: "fa-solid fa-location-dot", label: "Our Location", value: "Lahore, Punjab, Pakistan" },
  { icon: "fa-solid fa-phone", label: "Phone Number", value: "+92 321 0004633" },
  { icon: "fa-solid fa-envelope", label: "Email Address", value: "XClothing120@gmail.com" },
  { icon: "fa-solid fa-clock", label: "Working Hours", value: "Mon - Sat: 9AM - 9PM" },
];

function ContactPage() {
  return (
    <div>
      <ContactHero eyebrow="Get In Touch" heading="We'd Love to Hear From You" subtext="We love to hear from you on our customer service, merchandise, website or any topics you want to share with us." />
      <section className="flex gap-[50px] max-w-[1150px] mx-auto py-20 px-10 items-start">
        <ContactInfo items={contactInfo} />
        <ContactForm />
      </section>
    </div>
  );
}

function ContactHero({ eyebrow, heading, subtext }) {
  return (
    <section className="py-[100px] px-10 text-center text-white" style={{ background: "linear-gradient(135deg, #1F6F5F 0%, #17574b 100%)" }}>
      <p className="text-[13px] tracking-[3px] text-[#6FCF97] mb-4 font-semibold uppercase">{eyebrow}</p>
      <h1 className="text-[48px] text-white mb-4 leading-tight">{heading}</h1>
      <p className="text-[16px] text-white/75 max-w-[540px] mx-auto leading-[1.8]">{subtext}</p>
    </section>
  );
}

function ContactInfo({ items }) {
  return (
    <div className="w-[340px] shrink-0">
      <h2 className="text-[26px] font-bold mb-2">Contact Information</h2>
      <p className="text-[14px] text-gray-400 leading-[1.7] mb-8">Reach out through any of these channels and we'll get back to you as soon as possible.</p>
      {items.map(function (item) {
        return <ContactInfoCard key={item.label} icon={item.icon} label={item.label} value={item.value} />;
      })}
    </div>
  );
}

function ContactInfoCard({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 py-[18px] border-b border-gray-100">
      <div className="w-11 h-11 bg-[#f0f9f6] rounded-xl flex items-center justify-center text-[18px] text-[#1F6F5F] shrink-0">
        <i className={icon} />
      </div>
      <div>
        <h4 className="text-[13px] text-gray-400 mb-1 font-semibold uppercase tracking-wide">{label}</h4>
        <p className="text-[15px] text-gray-700 font-medium">{value}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(name + " (" + phone + " / " + email + ") sent: " + message);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="flex-1 bg-white rounded-2xl p-10 shadow-[0_4px_30px_rgba(0,0,0,0.07)] border border-gray-100">
      <h2 className="text-[26px] font-bold mb-2">Send Us a Message</h2>
      <p className="text-[14px] text-gray-400 mb-8">Ask us anything! We're here to help.</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <FormInput label="Name *" type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Phone *" type="tel" placeholder="+92 300 0000000" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <FormInput label="Email *" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <MessageArea value={message} onChange={(e) => setMessage(e.target.value)} />
        <SubmitBtn />
      </form>
    </div>
  );
}

function FormInput({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col mb-6">
      <label className="text-[13px] font-semibold text-gray-600 mb-2 uppercase tracking-wide">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="px-4 py-[13px] border-[1.5px] border-gray-200 rounded-lg text-[14px] text-gray-700 bg-gray-50 outline-none focus:border-[#1F6F5F] focus:bg-white transition-colors duration-200"
      />
    </div>
  );
}

function MessageArea({ value, onChange }) {
  return (
    <div className="flex flex-col mb-6">
      <label className="text-[13px] font-semibold text-gray-600 mb-2 uppercase tracking-wide">Message *</label>
      <textarea
        placeholder="Write your message here..."
        value={value}
        onChange={onChange}
        required
        className="px-4 py-[13px] border-[1.5px] border-gray-200 rounded-lg text-[14px] text-gray-700 bg-gray-50 outline-none focus:border-[#1F6F5F] focus:bg-white transition-colors duration-200 h-[140px] resize-y"
      />
    </div>
  );
}

function SubmitBtn() {
  return (
    <button
      type="submit"
      className="bg-[#6FCF97] text-[#1F6F5F] border-none px-6 py-[10px] text-[16px] rounded font-semibold cursor-pointer hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200"
    >
      <i className="fa-solid fa-paper-plane mr-2" />
      Send Message
    </button>
  );
}

export default ContactPage;
