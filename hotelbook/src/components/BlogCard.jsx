import React from 'react';
import { motion } from 'framer-motion';
import '../scss/main.scss';

export default function BlogCard({ post = {} }) {
	const { title = 'Blog Title', excerpt = 'Short summary...', image } = post;

	return (
		<motion.article
			className="blog-card"
			whileHover={{ scale: 1.02 }}
			transition={{ type: 'spring', stiffness: 300 }}
		>
			{image ? (
				<div className="card-media" style={{ backgroundImage: `url(${image})` }} />
			) : (
				<div className="card-media placeholder" />
			)}

			<div className="card-body">
				<h3 className="card-title">{title}</h3>
				<p className="card-excerpt">{excerpt}</p>
				<a className="card-cta" href="#">Read more</a>
			</div>
		</motion.article>
	);
}

