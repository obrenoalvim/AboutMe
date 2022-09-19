import { Social } from './styles'

export default function Homepage() {
  return (
    <Social>
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100012512077239">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/raj-kumar-web-designer/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </Social>
  )
}
