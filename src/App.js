import React, { useState } from "react";
// import Accordion from "./component/Accordion";
// import Search from "./component/Search";
// import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";

// const items = [
// 	{
// 		title: "what is this?",
// 		content: "This is a demo of react widget app",
// 	},
// 	{
// 		title: "why is this?",
// 		content: "It exists because of my desire to learn React",
// 	},
// 	{
// 		title: "when is this?",
// 		content:
// 			"It is in the month of august of 2020, Also, the pandemic is still active",
// 	},
// 	{
// 		title: "How is this?",
// 		content: "idk you tell!",
// 	},
// ];

// const options=[
// 	{
// 		label: 'The color of Red',
// 		value: 'red'
// 	},
// 	{
// 		label: 'The color of Blue',
// 		value: 'Blue'
// 	},
// 	{
// 		label: 'The color of Green',
// 		value: 'Green'
// 	}
// ];


export default () => {
	// for the drop down class we created we dont' need it while creating translate app so its like this actually we can remove this to remove the toggle button
	// const [selected, setSelected]= useState(options[0]);
	// const [showDropdown, setShowDropdown]=useState(true);
	
	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			{/* <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle</button>
			{showDropdown ?
				<Dropdown label="select a color" selected={selected} onSelectedChange={setSelected} options={options}/> : null
			} */}

			<Translate />
		</div>
	);
};
	