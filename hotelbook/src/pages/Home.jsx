import React from "react";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import HotelCard from '../components/HotelCard';

const hotels = [
  { id: 1, name: "Luxury Hotel", images: ["https://source.unsplash.com/800x600/?hotel,luxury"], desc: "World-class facilities.", price: '₹9,999', rating: 4.8 },
  { id: 2, name: "Sea View Resort", images: ["https://source.unsplash.com/800x600/?resort,beach"], desc: "Relax with ocean view.", price: '₹6,499', rating: 4.6 },
  { id: 3, name: "Mountain Inn", images: ["https://source.unsplash.com/800x600/?mountain-hotel"], desc: "Peaceful getaway.", price: '₹4,299', rating: 4.4 }
];

const Home = () => {
  return (
    <div className="container mt-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center mb-4">Welcome to Our Hotel Booking</h1>
        <p className="text-center text-secondary mb-5">Find and book the perfect hotel for your stay</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Grid container spacing={3}>
          {hotels.map(hotel => (
            <Grid item xs={12} md={4} key={hotel.id}>
              <HotelCard hotel={hotel} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </div>
  );
};

export default Home;
