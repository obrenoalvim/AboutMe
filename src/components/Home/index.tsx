import { HomepagePattern } from "./styles";

interface HomepageProps {
  name: string;
  path_img: string;
}

export default function Homepage(props: HomepageProps) {
  return (
    <HomepagePattern>
      <div className="span" id="Home">
        <p>
          <strong>I'm</strong>
        </p>
        <div className="hr"></div>
        <span>
          <strong>Breno Alvim</strong>
        </span>
        <div className="hr"></div>
        <img
          src={`https://readme-typing-svg.herokuapp.com?font=Inter&size=35&duration=3000&color=F8FAFC&width=375&height=60&lines=Web+Developer;Designer;Analyst;Full-Stack+Developer;Software+Engineer`}
          alt=""
        />
        <div className="hr"></div>
        
      </div>
      <div className="image">
        <img src={props.path_img} alt="" />
      </div>
    </HomepagePattern>
  );
}
