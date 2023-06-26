import { Route, Routes, Router } from "react-router-dom";
import Name from "./components/Name";

import React, { Component } from "react";

class App extends Component {
	render() {
		return (
			<div>
				<Routes>
					<Route path="/name" element={<Name />} />
				</Routes>
			</div>
		);
	}
}

export default App;
