import './Header.css';
import LogoDev from '../../Assets/img/dev.png';

function Header() {
    return (
        <>
            <div className="Header">
                <div className="span">
                    <div className="title">
                        <img src={'https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&duration=6000&color=F2F2F2&center=true&vCenter=true&width=370&height=100&lines=%3C+Hello%2C+World!+%2F%3E'} alt="" />
                    </div>
                    <div className="text">
                        <span>
                            My name is Breno Alvim, I'm 20 years old. I have been working with web development since March 2021. I enjoy generating new ideas and developing viable solutions to widely relevant problems. Throughout my career I went through several challenges that made me progress and learn quickly, so I always try to pass on my knowledge, teaching as many people as possible. Today, I would like you to accompany me in my story.
                        </span>
                    </div>
                </div>
                <div className="image">
                    <img src={LogoDev} alt="" />
                </div>
                <button className="next">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

        </>
    );
}

export default Header;
