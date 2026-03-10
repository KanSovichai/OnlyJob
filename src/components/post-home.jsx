import "./form/styles/post-home.css";
const PostHome = () => {
	return (
		<div>
			<div id="body">
				<div id="posted-job-div">
					<p id="p">See thousands of job posting.</p>
					<button id="button" type="button">
						Posted Job
					</button>
				</div>
			</div>
			<div id="motivation-section">
                <div id="motivation-section-div-1">
					<img id="moti-img" src="./src/assets/motivation-img-1.png" alt="" />
					<p id="moti-p">Build strong team work, with talented  staff.</p>
                </div>
				<div id="motivation-section-div-2">
					<img id="moti-img-2" src="./src/assets/motivation-img-2.png" alt="" />
					<p id="moti-p-2">Lean and improve your new skills.</p>
                </div>
            </div>
			<div id="broadcasting-section">
				<img src="./src/assets/broadcasting.png" id="broadcasting-img" alt="" />
				<div id="left-broadcasting-div">
					<p id="broadcasting-p">Call your friends, classmate or your team to get the job and new experience.</p>
					<button type="button" id="get-started-button">Get Started</button>
				</div>
			</div>
		</div>
	);
};
export default PostHome;
