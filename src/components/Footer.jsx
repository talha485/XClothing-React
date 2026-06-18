import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const mainLinks = [
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Store Locator", path: "#" },
  { label: "Terms & Conditions", path: "#" },
  { label: "Privacy Policy", path: "#" },
];

const contactDetails = [
  { icon: "fas fa-mobile-alt", text: "+92 321 0004633" },
  { icon: "fas fa-phone", text: "+92 320 4339485" },
  { icon: "fas fa-envelope", text: "XClothing120@gmail.com" },
];

const socialLinks = [
  { icon: "fab fa-facebook", url: "https://facebook.com" },
  { icon: "fab fa-instagram", url: "https://instagram.com" },
  { icon: "fab fa-x-twitter", url: "https://x.com" },
  { icon: "fab fa-youtube", url: "https://youtube.com" },
];

function Footer() {
  return (
    <footer className="flex bg-[#1F6F5F] text-[#EEEEEE] justify-around items-start p-10 flex-wrap gap-8">
      <Logo size="120px" />
      <FooterLinks title="MAIN LINKS" links={mainLinks} />
      <FooterContact workingHours="Mon - Sat (9AM - 9PM)" contacts={contactDetails} />
      <FooterSocial links={socialLinks} />
    </footer>
  );
}
function FooterLinks({ title, links }) {
  return (
    <div className="mt-[10px]">
      <h3 className="mb-2">{title}</h3>
      {links.map(function (link) {
        return <FooterLink key={link.label} label={link.label} path={link.path} />;
      })}
    </div>
  );
}
function FooterLink({ label, path }) {
  return (
    <Link
      to={path}
      className="block no-underline text-[#EEEEEE] mt-2 hover:text-[#6FCF97] transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

function FooterContact({ workingHours, contacts }) {
  return (
    <div className="mt-[10px]">
      <h3 className="mb-[10px]">Need Help?</h3>
      <p className="mb-2">Working Hours: {workingHours}</p>
      {contacts.map(function (contact) {
        return <ContactItem key={contact.text} icon={contact.icon} text={contact.text} />;
      })}
    </div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <p className="mb-2 cursor-pointer hover:text-[#6FCF97] transition-colors duration-200">
      <i className={`${icon} mr-2`} />
      {text}
    </p>
  );
}

function FooterSocial({ links }) {
  return (
    <div className="mt-[10px]">
      <h3 className="mb-3">FOLLOW US</h3>
      <div className="flex gap-2">
        {links.map(function (link) {
          return <SocialIcon key={link.url} icon={link.icon} url={link.url} />;
        })}
      </div>
    </div>
  );
}

function SocialIcon({ icon, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="no-underline">
      <i className={`${icon} text-[20px] text-[#EEEEEE] mx-[5px] hover:text-[#6FCF97] transition-colors duration-200 cursor-pointer`} />
    </a>
  );
}

export default Footer;
