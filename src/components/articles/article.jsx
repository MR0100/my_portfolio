import React from "react";
import { Link } from "react-router-dom";

import "./style/article.css";

const Article = (props) => {
	const { title, skills  } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-title">{title}</div>
				</div>
				<div className="article-right-side">
					<div className="article-date">{title}</div>
					{skills.map((skill, index) => (
						<div className="article-description">{skill}</div>
					))},
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
