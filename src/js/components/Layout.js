import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome",
		};	
	}

	render() {
		setTimeout(() => {
			this.setState({title: "Welcome PorHeng"});
		}, 1000);
		return (
			<div>
				<Header title={this.state.title} />
				<h1>Hello, this is from layout221 Por</h1>
				<Footer />
			</div>
		);
	}

}
