import React from 'react'
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
		<div>
			<div>
				<Link to="/chips">Chips</Link>
				<Link to="/candy-bar">Candy Bar</Link>
				<Link to="/lettuce">Lettuce</Link>
			</div>
			<h1>Vending Machine</h1>
			<img src="https://images.unsplash.com/photo-1578783204979-27a2e3de3746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmRpbmclMjBtYWNoaW5lfGVufDB8fDB8fHww" />
		</div>
	);
}

export default VendingMachine