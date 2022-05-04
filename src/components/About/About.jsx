import './About.css';
import imageDev from '../../Assets/img/dev.png'

function About() {
    function redirectPrev() {
        window.location.href = '/Start';
    }
    return (
        <>
            <div className="About">
            </div>
            <button className="prev" onClick={redirectPrev}>
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <button className="next">
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </>
    );
}

export default About;
