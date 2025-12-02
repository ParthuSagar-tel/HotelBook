import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>About Us</h1>
      <p className="text-secondary">
        We are a premium hotel booking service connecting travelers with the best hotels worldwide.
      </p>
      <p className="text-secondary">
        Our mission is to make your stay comfortable, safe, and memorable.
      </p>
    </motion.div>
  );
};

export default About;
