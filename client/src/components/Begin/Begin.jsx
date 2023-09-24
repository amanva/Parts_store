import './Begin.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
function Begin({names}){
return(
<>
<section className="begin">
    <div className="begin-backgroundEffect"/>
    <div className="container">
        <div className="beginBox">
        <div className="begin-mainText">
            <h1>{names}</h1>
        </div>
        <div className="smallerText">
            <div className="smallerContainer">
                <h2>Home</h2>
                <span class="greaterIcon">
                    <FontAwesomeIcon icon={faGreaterThan} />
                </span>
                <span class="elementor-icon-list-text">{names}</span>
            </div>
        </div>
        </div>
    </div>
</section>
</>
);
}

export default Begin;