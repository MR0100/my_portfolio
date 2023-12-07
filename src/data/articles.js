import React from "react";

function skill_01() {
	return {
		title: "Front-end Development",
		skills: [
			"Flutter - Mobile App Development",
			"Flutter - Web App Development",
			"ReactJS - Web App Development"
		],
	};
}

function skill_02() {
	return {
		title: "Back-end Development",
		skills: [
			"Dart - Flutter",
			"JavaScript - ReactJS",
			"NodeJS - ExpressJS",
			"PHP - CodeIgniter"
		],
	};
}

const myArticles = [skill_01, skill_02];

export default myArticles;
