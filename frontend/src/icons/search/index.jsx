import React from 'react';

function SearchIcon({ className, onClick }) {
	return (
		<svg
			onClick={onClick}
			className={`${className}`}
			xmlns="http://www.w3.org/2000/svg"
			width="33"
			height="33"
			fill="none"
			viewBox="0 0 33 33"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M27.5 27.5l-5.569-5.569m0 0A9.627 9.627 0 108.317 8.318 9.627 9.627 0 0021.93 21.93z"
			></path>
		</svg>
	);
}

export default SearchIcon;
