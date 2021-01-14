import React, { useState, useEffect } from "react";
import axios from "axios";


// useState and useEffect

const Search = () => {
	const [term, setTerm] = useState("programming");
	const [debouncedTerm,setDebouncedTerm] = useState(term);
	const [results, setResults]= useState([]);

	// console.log(result);

	useEffect(()=>{
		const timerId=setTimeout(()=>{
			setDebouncedTerm(term);
		},1000);

		return (()=>{
			clearTimeout(timerId);
		});
	},[term]);

	useEffect(()=>{
			//we can't mark this function as async otherwise we will get an error
			// Possible solution is to create a function inside and then use the async await syntax and invoke like below
			// or do direct invocation or use promise chaining( the .then() statements)
		const search = async () => {
			const { data }= await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					format: "json",
					origin: "*",
					srsearch: debouncedTerm,		// remeber to change the term to debouncedTerm to make a request
				},
			});
			setResults(data.query.search);
		};
		search();
	},[debouncedTerm]);


	// // useEffect hook 
	// // 1st implementation
	// useEffect(() => {
				//we can't mark this function as async otherwise we will get an error
							// Possible solution is to create a function inside and then use the async await syntax and invoke like below
							// or do direct invocation or use promise chaining( the .then() statements)
							// const search = async () => {
							// 	const { data }= await axios.get("https://en.wikipedia.org/w/api.php", {
							// 		params: {
							// 			action: "query",
							// 			list: "search",
							// 			format: "json",
							// 			origin: "*",
							// 			srsearch: term,
							// 		},
							// 	});
					
	// 		// console.log(data);
	// 		if(term){
	// 			setResults(data.query.search);
	// 		}			
	// 	};

	// 	if(term && !results.length){
	// 		search();

	// 	}else{
	// 		const timeoutId=setTimeout(()=>{
	// 			search();							// ** REMEBER ** to put the invocation in the timeout for it to work			
	// 		}, 1000);		//providing the amount of time 
	
	// 		return (()=>{
	// 			clearTimeout(timeoutId);	// this will work automatically as user cancels the previous search term like that
	// 		});		
	// 	}
	// }, [term]); //we will run some code anytime the data inside term changes

	const renderedResults = results.map((result)=>{
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
				</div>
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					<span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
					
				</div>
			</div>
		);
	});

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
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	);
};

export default Search;
