import "./form/styles/nav.css";
const nav = () => {
	return (
		<div id="container">
			<div id="logo">
				<img src="../src/assets/onlyjob.png" alt="" />
			</div>
			<div id="navigation">
				<ul id="navigator">
					<li>Home</li>
					<li>Job</li>
					<li>Service</li>
					<li>Contact</li>
				</ul>
				<div id="profile">
                    <img src="../src/assets/react.svg"/>
                </div>
			</div>
		</div>

	);
};
export default nav;



