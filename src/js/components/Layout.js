import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "Por";
	}
	render() {
		return (
			<div>
				<Header />
				<h1>Hello, this is from layout221 {this.name}</h1>
				<Footer />
			</div>
		);
	}

}
