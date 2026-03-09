import "./form/styles/career.css";

const career_buttons = () => {
	return (
        <div className="career_buttons">
            <div id="left-box-career">
                <h1>Explore for more career here!</h1>
                <h3>Discover your job at this topic</h3>
                <li>Get more experience and start from now.</li>
            </div>
            <div id="right-box-career">
                <div id="row-1-buttons">
                    <div className="career-bubble">Technology</div>
                    <div className="career-bubble">Education</div>
                    <div className="career-bubble">Leadership</div>
                </div>
                <div id="row-2-buttons">
                    <div className="career-bubble">Financial</div>
                    <div className="career-bubble">project</div>
                    <div className="career-bubble">Marketing</div>
                </div>
                <div id="row-3-buttons">
                    <div className="career-bubble">Human resource</div>
                    <div className="career-bubble">Others</div>
                </div>
            </div>
		</div>
    );
};
export default career_buttons;