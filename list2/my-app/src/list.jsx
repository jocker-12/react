import React from "react";
export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					isShow: false,
					name: "a",
					data: [
						{
							name: "a1"
						},
						{
							name: "a2"
						},
						{
							name: "a3"
						}
					]
				},
				{
					isShow: false,
					name: "b",
					data: [
						{
							name: "b1"
						},
						{
							name: "b2"
						},
						{
							name: "b3"
						}
					]
				},
				{
					isShow: false,
					name: "c",
					data: [
						{
							name: "c1"
						},
						{
							name: "c2"
						},
						{
							name: "c3"
						}
					]
				}
			]
		};
	}
	Clicks(ind) {
		let list = this.state.list;
		list[ind].isShow = !list[ind].isShow;
		this.setState({
			list
		});
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<li key={index}>
								<span
									onClick={() => {
										this.Clicks(index);
									}}
								>
									{item.name}
								</span>
								{item.isShow
									? item.data.map((items, indexs) => {
											return (
												<div key={indexs}>
													{items.name}
												</div>
											);
									  })
									: null}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
