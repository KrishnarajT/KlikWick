import { Route, Routes } from "react-router-dom";
import Name from "./components/Name";
import Game from "./components/Game";
import React, { Component } from "react";
import Scores from "./components/Scores";
import Light from "./components/Light";
import Sound from "./components/Sound";
import Statistics from "./components/Statistics";

class App extends Component {
	render() {
		return (
			<div>
				<Routes>
					<Route path="/" element={<Name />} />
					<Route path="/game" element={<Game />} />
					<Route path="/scores" element={<Scores />} />
					<Route path="/light" element={<Light />} />
					<Route path="/sound" element={<Sound />} />
					<Route path="/statistics" element={<Statistics />} />
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</div>
		);
	}
}

export default App;
