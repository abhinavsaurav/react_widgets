import React, { useState } from "react";

// This component is showing the use of useState() hook

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		// console.log(`index is ${index}`);
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? "active" : ""; // IMP keeps on forgetting

		return (
			//what the React.Fragment does is it stores the div without making a container for it like its just a holder if we use a div there
			// we would end up with a extra border showing around because of the div container styling
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
