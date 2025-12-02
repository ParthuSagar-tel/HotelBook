import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../scss/main.scss';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="hb-navbar">
			<div className="container nav-inner">
				<div className="brand">HotelBook</div>

				<nav className="nav-desktop">
					<a href="/" className="nav-link">Home</a>
					<a href="/hotel" className="nav-link">Hotels</a>
					<a href="/blog" className="nav-link">Blog</a>
					<a href="/about" className="nav-link">About</a>
					<a href="/contact" className="nav-link btn-outline">Contact</a>
				</nav>

				<button
					className="nav-toggle"
					aria-label="Toggle navigation"
					onClick={() => setOpen(v => !v)}
				>
					<span className={`burger ${open ? 'open' : ''}`} />
				</button>
			</div>

			<AnimatePresence>
				{open && (
					<motion.div
						className="mobile-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
					>
						<a href="/" onClick={() => setOpen(false)}>Home</a>
						<a href="/hotel" onClick={() => setOpen(false)}>Hotels</a>
						<a href="/blog" onClick={() => setOpen(false)}>Blog</a>
						<a href="/about" onClick={() => setOpen(false)}>About</a>
						<a href="/contact" className="btn-outline" onClick={() => setOpen(false)}>Contact</a>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
