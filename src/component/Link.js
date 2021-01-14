import React from "react";

const Link = ({ href, className, children }) => {
	const onClick = (event) => {
		// if we hold ctrl or the cmd in mac and press a link it opens up in a new page
		// below code is just checking the boolean property if the ctrl or cmd key is pressed
		// if it is then we don't want to run the below commands and simply load the page in new tab
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		event.preventDefault(); // 1. stopped default reloading property of browser
		window.history.pushState({}, "", href); // 2. changed the url to the one whose linked is clicked

		// 3. Created a event which will be dispatched after name changes(belwow 2)
		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent); // THis is dispatching this event and now we will set an event listener in route Component
	};

	return (
		<a onClick={onClick} href={href} className={className}>
			{children}
		</a>
	);
};

export default Link;
