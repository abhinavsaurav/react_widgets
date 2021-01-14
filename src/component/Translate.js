//   // can only be used at localhost:3000 any other places or url the req will fail

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label className="label">Enter a text</label>
				</div>
				<input
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
			</div>
			<Dropdown
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
				label="select a language"
			/>
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
