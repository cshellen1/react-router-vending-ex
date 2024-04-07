import React from 'react';
import { Link } from "react-router-dom";

function CandyBar() {
		return (
			<div>
				<h1>Candy Bar yum!</h1>
				<img src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2t8ZW58MHx8MHx8fDA%3D" />
				<Link to="/">
					Go back
				</Link>
			</div>
		);
	};


export default CandyBar