import React, { useState, useEffect, useRef } from "react";

//destructuring options out of props object
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	// can be props.options
	const [open, setOpen] = useState(false);

	// the ref is used to reference the specic property to which it is attached
	const ref = useRef(); //if in class component its React.createRef()   *******************

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				// important using ref we are doing this ***********
				return;
			}
			setOpen(false);
		};

		// just using this event listener for listening outside the body of the dropdown
		document.body.addEventListener("click", onBodyClick);

		return document.body.removeEventListener("click", onBodyClick);
	}, []);

	const renderedOptions = options.map((option) => {
		if (option === selected) {
			// just to make sure the currently selected item doesn't shows up in the list
			return null;
		}
		return (
			<div
				onClick={() => {
					onSelectedChange(option);
				}}
				key={option.value}
				className="item"
			>
				{option.label}
			</div>
		);
	});

	return (
		// using ternary operator to set the value of active or not based on the value of open state
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label"> {label} </label>
				<div
					onClick={() => {
						setOpen(!open);
					}}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
