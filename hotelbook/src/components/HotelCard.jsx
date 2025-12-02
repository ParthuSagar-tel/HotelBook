import React, { useState } from 'react';
import '../scss/main.scss';

export default function HotelCard({ hotel = {} }) {
	const { name = 'Hotel Name', price = '₹0', rating = 4.5, images = [] } = hotel;
	const [index, setIndex] = useState(0);

	const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
	const next = () => setIndex(i => (i + 1) % images.length);

	const hasImages = Array.isArray(images) && images.length > 0;

	return (
		<article className="hotel-card">
			<div className="hotel-media">
				{hasImages ? (
					<div className="simple-slider">
						<div className="slide" style={{ backgroundImage: `url(${images[index]})` }} />
						{images.length > 1 && (
							<div className="slider-controls">
								<button aria-label="previous" onClick={prev} className="slider-btn">‹</button>
								<button aria-label="next" onClick={next} className="slider-btn">›</button>
							</div>
						)}
					</div>
				) : (
					<div className="slide placeholder" />
				)}

				<div className="price-badge">{price}</div>
			</div>

			<div className="hotel-body">
				<h4 className="hotel-name">{name}</h4>
				<div className="hotel-meta">
					<span className="rating">★ {rating}</span>
					<button className="btn-sm">Book</button>
				</div>
			</div>
		</article>
	);
}

