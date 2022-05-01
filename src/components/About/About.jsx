import './About.css';
import imageDev from '../../Assets/img/dev.png'
import { getAbout } from '../../Assets/scripts/About';

function About() {
    return (
        <div className="About" id='About' onLoad={getAbout}>
            <div className="span">
                <h1>About Me</h1>
                <span>
                    My name is Breno Alvim, I'm 20 years old. I work with web development since March 2021. I enjoy generating new ideas and developing viable solutions to broadly relevant problems. Throughout my career I went through several challenges that made me progress and learn quickly, so I always try to pass my knowledge on, teaching as many people as possible.
                </span>
            </div>
            <div className="image">
                <img src={imageDev} alt="" />
            </div>
        </div>
    );
}

export default About;
