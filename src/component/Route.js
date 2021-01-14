/**   ------  EXAMPLE   ----------
 * Suppose we want to show the accordion at '/' or the search widget at '/search'
 * if we search for a widow.location in browser it shows us the various names and
 * information like pathname('/','/list'), origin, port,etc
 *
 * This below code would work if written in App.js we are just extracting the logic present here
 * if(window.location.pathname==='/')
 *      return <Accordion />
 * else if (window.location.pathname === '/search'){
 *      return <search />
 * }
 *
 * like this just extracting the components
 *
 *  @children --> refers to the children jsx element which will be used
 *
 * also showing them would be just by wrapping the above in function name and writing the function name in set of braces like {function name}
 *
 */
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
	// below useState() created just for rerendering the page when the pathname changes on receiving the event handler
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChange = () => {
			// 5. fucntion causes to change state of a variable and cause it to re-render
			setCurrentPath(window.location.pathname); // it is same because we are updating the path before we are using this event handler
		};

		window.addEventListener("popstate", onLocationChange); // 4. eventhandler created for handling the event generated

		return () => window.removeEventListener("popstate", onLocationChange); // *** forgetting about the arrow function every time in return statement in useEffect hook
	}, []); //for 1 time running

	return currentPath === path ? children : null; //we can set it as currentPath or leave it as window.location.pathname since technically they are the same
}; //if an error is coming because we are changing the tabs so fast the api req is late so that; why its giving error

export default Route;
