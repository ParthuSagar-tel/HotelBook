import React from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";

const Register = () => {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Register</h1>
      <form className="mt-4">
        <TextField label="Full Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }}>Sign Up</Button>
      </form>
    </motion.div>
  );
};

export default Register;
