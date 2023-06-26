import './App.css';
import { Route, Routes } from "react-router-dom";
import Name from './components/Name';

function App() {
  return (
		<div className="App">
			{/* <Routes>
				<Route path="/home" element={changeColors(<Home />)} />
				<Route path="/about" element={changeColors(<About />)} />
				<Route path="/contact" element={changeColors(<Contact />)} />
				<Route path="/card" element={changeColors(<Cardwrapper />)} />
				<Route
					path="/card/:id"
					element={changeColors(<Cardwrapper />)}
				/>
			</Routes> */}
      <Routes>
        <Route path="/name" element={<Name />} />
      </Routes>
		</div>
  );
}

export default App;
