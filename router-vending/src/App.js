import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Lettuce from "./Lettuce";
import Chips from "./Chips";
import CandyBar from "./CandyBar";

function App() {
  return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<VendingMachine />
					</Route>
					<Route path="/candy-bar" exact>
						<CandyBar />
					</Route>
					<Route path="/chips" exact>
						<Chips />
					</Route>
					<Route path="/lettuce" exact>
						<Lettuce />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
