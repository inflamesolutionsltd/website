import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaCashRegister, FaChartLine,FaMoneyCheckAlt,FaBuilding,FaFileAlt,FaCloud, FaGift,FaClock, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaPlug, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

export default function HRSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");

  const slides = [
    { src: "/img/hr.gif", alt: "HRPro Dashboard" },
    { src: "/img/payroll-processing.jpg", alt: "Payroll Automation" },
    { src: "/img/compliance-reports.jpg", alt: "Compliance Reports" },
  ];

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tabs = [
    {
      id: "dashboard",
      title: "Employee Dashboard",
      content:
        "Manage employee profiles, track performance, and streamline HR tasks with an intuitive, real-time dashboard.",
    },
    {
      id: "payroll",
      title: "Payroll Automation",
      content:
        "Automate payroll calculations, tax deductions, and direct deposits for fast, error-free processing.",
    },
    {
      id: "compliance",
      title: "Compliance Reports",
      content:
        "Generate detailed reports to ensure compliance with labor laws and regulations, all in a few clicks.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <Head>
        <title>HR & Payroll Solutions</title>
        <meta
          name="description"
          content="Streamline HR and payroll with HRPro’s intuitive employee management, automated payroll, and compliance tools."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="pos-software">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="h1">
                Best HR and Payroll software <span>in Bangladesh</span>
              </h1>
              <p className="p">
                Inflame HR & Payroll Software offers efficient employee management, automated salary processing, tax
                calculation, attendance tracking, and seamless integration, perfect payroll and human resources software for
                businesses in Bangladesh.

              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Features
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(244, 63, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="hero-image"
              variants={slideRight}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/img/hr4.png"
                alt="HRPro Dashboard"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>
        <div className="headers">
          <span className="banner-text">
            Best Software development company in Bangladesh
          </span>
          <Link href="contact">
            <span className="btn btn-secondary">Book for Demo</span>
          </Link>
        </div>

        {/* Features Section */}
        <section className="features section-padding" id="features">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Features That Transform HR</h2>
              <p className="p">
                Equip your HR team with tools for seamless employee management, payroll, and compliance.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaUsers />,
                  title: "Employee Database Management",
                  desc: "Store and manage all employee records in one central platform.",
                },
                {
                  icon: <FaCashRegister />,
                  title: "Automated Payroll Processing",
                  desc: "Easily generate salaries with auto calculation of taxes, benefits, and deductions, many more.",
                },
                {
                  icon: <FaClock />,
                  title: "Attendance & Leave Management",
                  desc: "Track daily attendance, holidays, paid leave requests, absent deduction, and sick leave.",
                },
                {
                  icon: <FaGift />,
                  title: "Overtime & Bonus Tracking",
                  desc: "Automatically manage overtime hours, bonuses, incentives festival bonuses.",
                },
                {
                  icon: <FaStar />,
                  title: "Tax & Compliance Management",
                  desc: "Handles income tax, NID, E-TIN, and local compliance according to NRB format.",
                },
                {
                  icon: <FaMoneyCheckAlt />,
                  title: "Employee Loan & Advance Salary Management",
                  desc: "Manage employee loans, EMI, and salary advances.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Performance & Appraisal Tracking",
                  desc: "Track employee performance and manage appraisals efficiently.",
                },
                {
                  icon: <FaBuilding />,
                  title: "Multi-Branch Support",
                  desc: "Manage employees across multiple locations from a single dashboard.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Custom Role & Access Control",
                  desc: "Set different access levels for HR, finance, and admin teams.",
                },
                {
                  icon: <FaFileAlt />,
                  title: "Payslip & Report Generation",
                  desc: "Auto-generate payslips, salary sheets, and tax reports.",
                },
                {
                  icon: <FaPlug />,
                  title: "Integration Friendly",
                  desc: "Easily integrates with accounting and attendance devices.",
                },
                {
                  icon: <FaCloud />,
                  title: "Cloud-Based Access",
                  desc: "Access your HR and payroll system anytime, anywhere.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={index % 2 === 0 ? slideLeft : slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="icon-wrapper">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits section-padding" id="benefits">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Why You Need the Best HR and Payroll Software.
              </h2>
              {/* <p className="p">
                Transform HR operations with tools that save time, ensure accuracy, and empower your team.
              </p> */}
            </motion.div>
            <div className="benefits-grid">
              <motion.div
                className="benefits-image"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Image
                  src="/img/pos.jpg"
                  alt="HRPro Benefits"
                  width={880}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Save Time",
                    desc: "Automate payroll and HR tasks to focus on strategy.",
                  },
                  {
                    title: "Ensure Accuracy",
                    desc: "Eliminate errors with automated calculations and reports.",
                  },
                  {
                    title: "Stay Compliant",
                    desc: "Meet labor regulations with built-in compliance tools.",
                  },
                  {
                    title: "Engage Employees",
                    desc: "Simplify benefits and performance tracking for your team.",
                  },
                  {
                    title: "Real-Time Reports",
                    desc: "Grow your workforce with tools that adapt to your needs.",
                  }, {
                    title: "Scale with Ease",
                    desc: "Grow your workforce with tools that adapt to your needs.",
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    variants={slideRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <IoMdCheckmarkCircleOutline className="benefit-icon" />
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="demo-section section-padding" id="demo">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Experience HRPro in Action</h2>
              <p className="p">
                Discover HRPro’s HR and payroll software through an interactive demo. See how our employee dashboard, payroll automation, and compliance reports streamline your operations.
              </p>
            </motion.div>
            <motion.div
              className="demo-container"
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="demo-grid">
                {/* Carousel */}
                <motion.div
                  className="demo-carousel"
                  variants={slideLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        width={600}
                        height={400}
                        style={{ objectFit: "cover" }}
                        className="demo-img"
                        onError={() => console.error(`Failed to load image: ${slides[currentSlide].src}`)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-controls">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => {
                          console.log("Carousel dot clicked:", index);
                          setCurrentSlide(index);
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Tabs and Content */}
                <motion.div
                  className="demo-content"
                  variants={slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="demo-tabs">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        className={`demo-tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => {
                          console.log("Tab clicked:", tab.id);
                          setActiveTab(tab.id);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="demo-tab-content"
                    >
                      <h4>{tabs.find((tab) => tab.id === activeTab)?.title}</h4>
                      <p>{tabs.find((tab) => tab.id === activeTab)?.content}</p>
                    </motion.div>
                  </AnimatePresence>
                  <motion.div
                    className="demo-benefits"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      "Effortless HR management with a sleek interface",
                      "Accurate payroll processing in real time",
                      "Seamless integration with your HR ecosystem",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="benefit-item"
                      >
                        <IoMdCheckmarkCircleOutline className="check-icon" />
                        <p>{benefit}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Request Demo Button */}
              <Link href="/request-demo" legacyBehavior>
                <motion.a
                  className="btn btn-primary demo-request-btn"
                  onClick={() => console.log("Request Demo clicked")}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(245, 158, 11, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Request a Live Demo
                </motion.a>
              </Link>
            </motion.div>

            {/* FAQ Snippet */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>Frequently Asked Questions</h4>
              {[
                {
                  question: "What is Inflame HR & Payroll Software?",
                  answer: "It’s a complete solution for managing employee records, payroll, attendance, and compliance in one platform, and much more."
                },
                {
                  question: "Who should use this software?",
                  answer: "Ideal for companies of any size, retail, manufacturing, corporate offices, and multi-branch businesses in Bangladesh."
                },
                {
                  question: "Is it cloud-based?",
                  answer: "Yes, it’s a cloud-based system accessible from any device, anywhere in the world."
                },
                {
                  question: "Can it automate salary processing?",
                  answer: "Absolutely! It calculates salaries, bonuses, overtime, taxes, and deductions automatically."
                },
                {
                  question: "Does it support attendance devices?",
                  answer: "Yes, it integrates with biometric attendance machines for accurate tracking."
                },
                {
                  question: "Is it compliant with Bangladeshi tax laws?",
                  answer: "Yes, it is fully compliant with Bangladesh’s payroll and tax regulations format of NRB."
                },
                {
                  question: "Is payslip generation automatic?",
                  answer: "Yes, you can generate and download payslips for each employee with one click."
                },
                {
                  question: "Does it offer performance management?",
                  answer: "Yes, you can monitor and evaluate employee performance and appraisals."
                },
                {
                  question: "Is it user-friendly?",
                  answer: "Yes, designed for HR and finance teams with no technical expertise required."
                },
                {
                  question: "What kind of support is available?",
                  answer: "We provide training, live support, and regular updates for smooth operation, as well as 7/24 support."
                }
              ].map((faq, index) => (
                <div key={index} className="faq-item">
                  <h5>{faq.question}</h5>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials section-padding" id="testimonials">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Voices from HR Leaders</h2>
              <p>Hear from HR professionals thriving with HRPro’s solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Emma Thompson",
                  role: "HR Manager",
                  quote:
                    "HRPro’s payroll automation has saved us countless hours. It’s accurate and so easy to use!",
                },
                {
                  name: "Michael Chen",
                  role: "Payroll Specialist",
                  quote:
                    "The compliance reports keep us audit-ready at all times. HRPro is a lifesaver!",
                },
                {
                  name: "Aisha Patel",
                  role: "HR Director",
                  quote:
                    "Managing our workforce across locations is seamless with HRPro’s employee dashboard.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <FaStar className="star-icon" />
                  <p className="quote">“{testimonial.quote}”</p>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="pricing section-padding" id="pricing">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Choose Your HR Plan</h2>
              <p>Flexible pricing to streamline your HR and payroll operations.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  features: [
                    "Up to 50 Employees",
                    "Basic Payroll",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$99",
                  features: [
                    "Up to 200 Employees",
                    "Benefits Administration",
                    "Compliance Tracking",
                    "Integrations",
                    "Priority Support",
                  ],
                  link: "/pricing/growth",
                  cta: "Choose Growth",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited Employees",
                    "All Growth Features",
                    "Dedicated Manager",
                    "Custom Integrations",
                    "24/7 Support",
                  ],
                  link: "/contact",
                  cta: "Contact Us",
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    {plan.price}
                    {plan.price !== "Custom" && <span>/month</span>}
                  </div>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <IoMdCheckmarkCircleOutline className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.link} legacyBehavior>
                    <motion.a
                      className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {plan.cta}
                    </motion.a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="cta section-padding">
          <div className="container">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Ready to Transform HR?</h2>
              <p>
                Start your free trial and let HRPro simplify payroll, compliance, and employee management for your team.
              </p>
              <motion.a
                href="/signup"
                className="btn btn-primary cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Try for Free
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>


    </>
  );
}