import "./form/styles/footer.css";
const Footer = () => {
	return (
		<div id="footer">
			<div id="footer-div-1">
				<h1 id="footer-h1">About Us</h1>
				<ul>
					<li>Company</li>
					<li>Contact</li>
					<li>Career</li>
					<li>Affiliates</li>
					<li>Stores</li>
				</ul>
			</div>
            <div id="footer-div-1">
				<h1 id="footer-h1">Useful Links</h1>
				<ul>
					<li>Support</li>
					<li>Refund</li>
					<li>FAQ</li>
					<li>Feedback</li>
					<li>Stories</li>
				</ul>
			</div>
            <div id="footer-left-div">
                <h1 id="footer-h1">Subscibe to become a member</h1>
                <div id="footer-input-div">
                    <input id="footer-email-input" type="email" placeholder="yourname@gmail.com" />
                    <button type="button" id="join-button">Join !</button>
                </div>
            </div>
		</div>
	);
};
export default Footer;
