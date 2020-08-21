import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("");

	console.log("I run every render");

	useEffect(() => {
		const search = async () => {
			await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					format: "json",
					origin: "*",
					srsearch: term,
				},
			});
		};
		search();
	}, [term]); //we will run some code anytime a code changes

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>
		</div>
	);
};

export default Search;
