import React from "react";
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				title: [],
				time: [],
				text: []
			}
		};
	}
	componentDidMount() {
		let data = this.state.data;
		let str = require("./text").str;
		let arrs = str.split("\n");
		data.title = arrs.splice(0, 4);
		arrs.forEach((item, index) => {
			data.time.push(
				item.slice(item.indexOf("[") + 1, item.indexOf("]"))
			);
			data.text.push(item.slice(item.indexOf("]") + 1));
		});
		this.setState({
			data
		});
		console.log(this.state.data);
	}
	render() {
		return (
			<div className="wrap">
				<div className="back" />
				<div className="noneBox">
					<audio
						controls
						src="https://m128.xiami.net/658/2110245658/2102878266/1796909743_1519985857185.mp3?auth_key=1529031600-0-0-806673fdc0adc56c52118f159d19bce0"
					/>
				</div>
				<div className="main">
					<div className="imgBox">
						<img
							src="//pic.xiami.net/images/album/img14/123/59ed88e46b0f6_6180514_1508739300.jpg@!c-400-400"
							alt=""
						/>
					</div>
					<div className="textBox">
						<div className="showBox">
							<div className="hideBox">
								<span>我是歌词</span>
							</div>
						</div>
					</div>
					<div className="loadLine">
						<div className="lineBox">
							<span>00:00</span>
							<div className="line">
								<div className="line_wrap">
									<div className="moveLine">
										<div className="moveBar" />
									</div>
								</div>
							</div>
							<span>03:34</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
//接口地址https://www.easy-mock.com/mock/5b1a311998c31e30a66e39a9/getmusic/getmusic
