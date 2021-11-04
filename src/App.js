import "./styles.css";

import { useState } from "react";

import InputComponent from "./components/InputComponent";
import PreviewComponent from "./components/PreviewComponent";

import startString from "./data/startString";

export default function App() {
	const [markInp, setMarkInp] = useState(startString);

	return (
		<div className="App">
			<InputComponent markInp={markInp} setMarkInp={setMarkInp} />
			<PreviewComponent markInp={markInp} />
		</div>
	);
}
