import "./form/styles/career.css";

const career_buttons = () => {
	return (
        <div className="career_buttons mt-20">
            <div id="left-box-career">
                <h1>Qualified requirement</h1>
                <h3>Hiring your talent staffs.</h3>
                {/* <li>Get more experience and start from now.</li> */}
            </div>
            <div id="right-box-career">
                <div id="row-1-buttons">
                    <div className="career-bubble">graduated</div>
                    <div className="career-bubble">Diploma</div>
                    <div className="career-bubble">Reliable</div>
                </div>
                <div id="row-2-buttons">
                    <div className="career-bubble">Financial</div>
                    <div className="career-bubble">Leadership</div>
                    <div className="career-bubble">Internship</div>
                </div>
                <div id="row-3-buttons">
                    <div className="career-bubble">Flexible Solving</div>
                    <div className="career-bubble">Others</div>
                </div>
            </div>
		</div>
    );
};
export default career_buttons;