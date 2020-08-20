import React from "react";
import Accordion from "./component/Accordion";

const items = [
	{
		title: "what is this?",
		content: "This is a demo of react widget app",
	},
	{
		title: "why is this?",
		content: "It exists because of my desire to learn React",
	},
	{
		title: "when is this?",
		content:
			"It is in the month of august of 2020, Also, the pandemic is still active",
	},
	{
		title: "How is this?",
		content: "idk you tell!",
	},
];

export default () => {
	return (
		<div>
			<br />
			<Accordion items={items} />
		</div>
	);
};
