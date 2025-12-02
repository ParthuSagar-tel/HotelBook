import React from 'react';
import '../scss/main.scss';

export default function Footer() {
	return (
		<footer className="hb-footer">
			<div className="container footer-grid">
				<div className="col">
					<div className="brand">HotelBook</div>
					<p className="muted">Find and book the best stays around the world.</p>
				</div>

				<div className="col">
					<h4>Company</h4>
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/contact">Contact</a>
				</div>

				<div className="col">
					<h4>Support</h4>
					<a href="#">Help Center</a>
					<a href="#">Terms</a>
					<a href="#">Privacy</a>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<span>© {new Date().getFullYear()} HotelBook</span>
					<div className="socials">
						<a aria-label="twitter" href="#">Twitter</a>
						<a aria-label="instagram" href="#">Instagram</a>
						<a aria-label="facebook" href="#">Facebook</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

