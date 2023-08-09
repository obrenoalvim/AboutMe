import Link from "next/link";
import Image from "next/image";
import { Container, Main } from "./styles";

export default function HomePage() {
  return (
    <Container>
      <Main>
        <main>
          <span className="AboutMe">
            Hello, World ! {`I'm`} <strong>Breno Alvim</strong>
          </span>
          <span>Full-Stack</span>
          <h1>
            Developer
          </h1>
          <div className="icons">
            <Link href={`https://tabnews.com.br/obrenoalvim`}>
              <Image
                src="/svg/tabnews.svg"
                width={50}
                height={50}
                alt="TabNews"
                className="icon"
              />
            </Link>
            <Link href={`https://github.com/obrenoalvim`}>
              <Image
                src="/svg/github.svg"
                width={50}
                height={50}
                alt="Github"
                className="icon"
              />
            </Link>
            <Link href={`https://linkedin.com/in/brenoalvim`}>
              <Image
                src="/svg/linkedin.svg"
                width={50}
                height={50}
                alt="Linkedin"
                className="icon"
              />
            </Link>
          </div>
        </main>
      </Main>
    </Container>
  );
}
