import React from "react";
import {
	BrowserRouter as Router,
	Link,
	Switch,
	Redirect
} from "react-router-dom";
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: "purple",
					color: "purple"
				},
				{
					title: "skyblue",
					color: "skyBlue"
				},
				{
					title: "#f60",
					color: "#f60"
				},
				{
					title: "pink",
					color: "pink"
				},
				{
					title: "yellow",
					color: "yellow"
				}
			]
		};
	}
	render() {
		cfc;
		return (
			<div>
				<p>
					<Link to="/List">colorGroup</Link>
				</p>
				<p>
					<Link to="/img:">yellow</Link>
				</p>
				<p>
					<Link to="/img">pink</Link>
				</p>
			</div>
		);
	}
}
