import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState("");
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);

		return () => {
			// remeber to use arrow function in cleanup
			clearTimeout(timerId);
		};
	}, [text]);

	useEffect(() => {
		// console.log("running use effect");
		const doTranslation = async () => {
			const { data } = await axios.post(
				"https://translation.googleapis.com/language/translate/v2",
				{},
				{
					params: {
						q: debouncedText,
						target: language.value,
						key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
					},
				}
			);
			setTranslatedText(data.data.translations[0].translatedText);
		};

		doTranslation();
	}, [language, debouncedText]);

	return <div>{translatedText}</div>;
};

export default Convert;
