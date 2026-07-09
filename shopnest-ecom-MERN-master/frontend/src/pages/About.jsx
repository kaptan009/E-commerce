import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "40px",
        background: "#18181b",
        borderRadius: "15px",
        color: "#ffffff",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ color: "#f97316", marginBottom: "20px" }}>
        About Developer
      </h1>

      <h2 style={{ color: "#ffffff" }}>
        Himanshu Prajapati
      </h2>

      <p>
        Hello! My name is <strong>Himanshu Prajapati</strong>, and I am a
        Bachelor of Technology (B.Tech) student in Computer Science Engineering
        at <strong>Satyug Darshan Institute of Engineering & Technology</strong>.
        I am passionate about Full Stack Web Development, modern web
        technologies, and building real-world software applications.
      </p>

      <p>
        <strong>ShopNest</strong> is my academic MERN Stack project developed to
        demonstrate practical knowledge of frontend and backend development.
        This project provides a complete e-commerce solution with user
        authentication, product management, shopping cart, secure checkout, and
        an admin dashboard.
      </p>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>
        Technical Skills
      </h2>

      <ul>
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Redux Toolkit</li>
        <li>JWT Authentication</li>
        <li>Cloudinary</li>
        <li>Razorpay Integration</li>
        <li>Git & GitHub</li>
      </ul>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>
        Project Highlights
      </h2>

      <ul>
        <li>Secure User Login & Registration</li>
        <li>Admin Dashboard</li>
        <li>Product Management System</li>
        <li>Shopping Cart & Checkout</li>
        <li>Product Search & Category Filter</li>
        <li>Cloud Image Upload</li>
        <li>Responsive User Interface</li>
        <li>Payment Gateway Integration</li>
      </ul>

      <h2 style={{ color: "#f97316", marginTop: "30px" }}>
        Career Objective
      </h2>

      <p>
        My goal is to become a skilled Full Stack Developer by continuously
        learning new technologies and building innovative web applications that
        solve real-world problems. I enjoy working on challenging projects and
        improving my development skills through practical experience.
      </p>

      <hr style={{ margin: "35px 0", borderColor: "#333" }} />

      <p style={{ textAlign: "center", color: "#a1a1aa" }}>
        <strong>Developed by Himanshu Prajapati</strong>
        <br />
        B.Tech CSE | Satyug Darshan Institute of Engineering & Technology
      </p>
    </div>
  );
};

export default About;