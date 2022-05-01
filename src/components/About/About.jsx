import './About.css';
import imageDev from '../../Assets/img/dev.png'

function About() {
    return (
        <div className="About" id='About'>
            <div className="span">
                <h1>About Me</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quo aliquam. Architecto sint quo magni velit doloribus itaque, obcaecati inventore expedita quia porro ex quam ad praesentium commodi, esse sequi?
            </div>
            <div className="image">
                <img src={imageDev} alt="" />
            </div>
        </div>
    );
}

export default About;
