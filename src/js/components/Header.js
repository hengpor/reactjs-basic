import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<header>this is header</header>
			</div>
		);
	}

}
