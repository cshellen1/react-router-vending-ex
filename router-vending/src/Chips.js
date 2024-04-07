import React from 'react'
import { Link } from "react-router-dom";

function Chips() {
  return (
		<div>
			<h1>Chips yum!</h1>
			<img src="https://images.unsplash.com/photo-1576642589592-7d9778a1c9e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnJTIwb2YlMjBjaGlwc3xlbnwwfHwwfHx8MA%3D%3D" />
			<Link to="/">Go back</Link>
		</div>
	);
}

export default Chips