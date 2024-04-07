import React from 'react'
import { Link } from 'react-router-dom';


function Lettuce() {
  return (
		<div>
			<h1>Lettuce yum!</h1>
			<img src="https://images.unsplash.com/photo-1640958904159-51ae08bd3412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxldHR1Y2V8ZW58MHx8MHx8fDA%3D" />
			<Link to="/">
				Go back
			</Link>
		</div>
	);
}

export default Lettuce