import { AboutmeContainer } from "./styles";

interface AboutmeProps {
  name: string;
}

export default function Aboutme(props: AboutmeProps) {
  return (
    <AboutmeContainer>
      <div className="aboutme" id="About"></div>
    </AboutmeContainer>
  );
}
