import "./form/styles/home.css";
const home = () => {
	return (
		<main>
			<div id="left-box">
				<div id="hero-text-div">
					<h1 id="Hero-text">Welcome to job finding community</h1>
				</div>
				<div id="hero-para-div">
					<p>Thousands of job is waiting for you to show your talent</p>
				</div>
				<div id="hero-bubble">
					<div id="bubble-1">
						<svg
							className="dot-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="currentColor"
								stroke="currentColor"
								stroke-width="4"
								d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
							/>
						</svg>
						<p>Start your day with us here.</p>
					</div>
					<div id="bubble-2">
						<svg
							className="dot-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="currentColor"
								stroke="currentColor"
								stroke-width="4"
								d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
							/>
						</svg>
						<p>Apply your job.</p>
					</div>
					<div id="bubble-3">
						<svg
							className="dot-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="currentColor"
								stroke="currentColor"
								stroke-width="4"
								d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
							/>
						</svg>
						<p>Get more experience.</p>
					</div>
					<div id="bubble-4">
						<svg
							className="dot-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="currentColor"
								stroke="currentColor"
								stroke-width="4"
								d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
							/>
						</svg>
						<p>Increase your income</p>
					</div>
				</div>
			</div>
			<div id="right-box">
                <img id="hero-image" src="../src/assets/humans.png" alt="" />
            </div>
		</main>
		
	);
};
export default home;
