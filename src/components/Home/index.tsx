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
          Hello, <strong>Word!</strong>
          <br />
          My name is:
        </p>
        <div className="hr"></div>
        <span>
          <strong>Breno Alvim</strong>
        </span>
        <div className="hr"></div>
        <img
          src={`https://readme-typing-svg.herokuapp.com?font=Inter&size=35&duration=3000&color=F8FAFC&width=375&height=60&lines=%3C+Web+Developer+%2F%3E;%3C+Designer+%2F%3E;%3C+Analyst+%2F%3E`}
          alt=""
        />
      </div>
      <div className="image">
        <img src={props.path_img} alt="" />
      </div>
    </HomepagePattern>
  );
}
