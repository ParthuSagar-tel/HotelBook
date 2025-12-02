import React from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Us</h1>
      <form className="mt-4">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
      </form>
    </motion.div>
  );
};

export default Contact;
