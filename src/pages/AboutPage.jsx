import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { icon: "fa-solid fa-shirt", value: "500+", label: "Products" },
  { icon: "fa-solid fa-users", value: "10k+", label: "Happy Customers" },
  { icon: "fa-solid fa-star", value: "4.9", label: "Avg Rating" },
  { icon: "fa-solid fa-truck", value: "Fast", label: "Delivery" },
];

const values = ["Integrity", "Trust", "Commitment to Excellence", "Teamwork"];

function AboutPage() {
  return (
    <div>
      <AboutHero eyebrow="Our Story" heading="Crafted for the Modern Man" subtext="Style meets substance — XClothing is where confidence begins." />
      <AboutSection stats={stats} />
      <VMVSection values={values} />
      <PromiseSection />
    </div>
  );
}

function AboutHero({ eyebrow, heading, subtext }) {
  return (
    <section className="py-[100px] px-10 text-center text-white" style={{ background: "linear-gradient(135deg, #1F6F5F 0%, #17574b 100%)" }}>
      <p className="text-[13px] tracking-[3px] text-[#6FCF97] mb-4 font-semibold uppercase">{eyebrow}</p>
      <h1 className="text-[52px] text-white mb-4 leading-tight">{heading}</h1>
      <p className="text-[17px] text-white/75 max-w-[500px] mx-auto">{subtext}</p>
    </section>
  );
}

function AboutSection({ stats }) {
  return (
    <section className="py-20 px-10 max-w-[1200px] mx-auto">
      <div className="flex gap-[60px]">
        <AboutText />
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}

function AboutText() {
  return (
    <div className="flex-1">
      <span className="text-[12px] tracking-[3px] text-[#1F6F5F] font-bold block mb-3 uppercase">Who We Are</span>
      <h2 className="text-[36px] text-gray-800 mb-6">More Than Just Clothing</h2>
      <p className="text-[15px] text-gray-600 leading-[1.9] mb-4">XClothing is a modern fashion brand dedicated to men's formal and casual wear. Our journey is driven by a simple belief: quality products and consistent customer care create lasting success.</p>
      <p className="text-[15px] text-gray-600 leading-[1.9] mb-4">We are committed to building strong relationships with our customers by delivering stylish, comfortable, and high-quality clothing. Every product at XClothing is designed to reflect sophistication and modern trends.</p>
      <p className="text-[15px] text-gray-600 leading-[1.9]">Our collections are crafted to meet the needs of today's men — combining elegance with everyday comfort.</p>
    </div>
  );
}

function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-5 shrink-0 w-[300px]">
      {stats.map(function (stat) {
        return <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />;
      })}
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-gray-50 rounded-xl px-5 py-7 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <i className={`${icon} text-[28px] text-[#1F6F5F] mb-3 block`} />
      <h3 className="text-[26px] font-bold mb-1">{value}</h3>
      <p className="text-[13px] text-gray-400">{label}</p>
    </div>
  );
}

function VMVSection({ values }) {
  return (
    <section className="bg-[#f5faf9] py-20 px-10">
      <div className="grid grid-cols-3 gap-8 max-w-[1100px] mx-auto">
        <VMVCard icon="fa-solid fa-eye" title="Vision" content="To become a symbol of modern style and confidence for men across Pakistan and beyond." highlight={false} />
        <VMVCard icon="fa-solid fa-bullseye" title="Mission" content="To lead men's fashion by offering high-quality clothing, elegant designs, and excellent customer service." highlight={true} />
        <ValuesCard values={values} />
      </div>
    </section>
  );
}

function VMVCard({ icon, title, content, highlight }) {
  return (
    <div className={`rounded-2xl py-10 px-8 border border-gray-100 text-center hover:-translate-y-[6px] hover:shadow-xl transition-all duration-200 ${highlight ? "bg-[#1F6F5F] text-white" : "bg-white"}`}>
      <i className={`${icon} text-[28px] mb-4 block ${highlight ? "text-white" : "text-[#1F6F5F]"}`} />
      <h3 className={`text-[22px] font-bold mb-3 ${highlight ? "text-white" : "text-gray-800"}`}>{title}</h3>
      <p className={`text-[14px] leading-[1.8] ${highlight ? "text-white/85" : "text-gray-500"}`}>{content}</p>
    </div>
  );
}

function ValuesCard({ values }) {
  return (
    <div className="bg-white rounded-2xl py-10 px-8 border border-gray-100 text-center hover:-translate-y-[6px] hover:shadow-xl transition-all duration-200">
      <i className="fa-solid fa-heart text-[28px] text-[#1F6F5F] mb-4 block" />
      <h3 className="text-[22px] font-bold mb-3 text-gray-800">Values</h3>
      <ul className="list-none text-left">
        {values.map(function (val) {
          return <ValueItem key={val} text={val} />;
        })}
      </ul>
    </div>
  );
}

function ValueItem({ text }) {
  return (
    <li className="text-[14px] text-gray-500 mb-2 flex items-center gap-[10px]">
      <i className="fa-solid fa-check text-[#1F6F5F] text-[13px]" />
      {text}
    </li>
  );
}

function PromiseSection() {
  return (
    <section className="py-20 px-10 text-center text-white" style={{ background: "linear-gradient(135deg, #1F6F5F 0%, #17574b 100%)" }}>
      <i className="fa-solid fa-shield-halved text-[48px] text-[#6FCF97] mb-5 block" />
      <h2 className="text-[36px] text-white mb-4">Our Promise to You</h2>
      <p className="text-[16px] text-white/80 max-w-[560px] mx-auto mb-8 leading-[1.8]">
        At XClothing, we value our customers' trust and loyalty. Your confidence inspires us to grow, innovate, and deliver excellence in everything we do.
      </p>
      <Link
        to="/"
        className="bg-[#6FCF97] text-[#1F6F5F] no-underline px-6 py-[10px] rounded font-semibold hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200"
      >
        Shop the Collection
      </Link>
    </section>
  );
}

export default AboutPage;
