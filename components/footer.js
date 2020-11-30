import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// See this link for how to implement FontAwesome
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
// Also:
// https://fontawesome.com/how-to-use/on-the-web/using-with/react

export default function Footer() {
  return (
    <div className="footer bg-dark py-5">
    <div className="container grid grid-3">
      <div>
        <h1>Loruki</h1>
        <p>Copyright &copy; 2020</p>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="features.html">Features</a></li>
          <li><a href="docs.html">Docs</a></li>
        </ul>
      </nav>
      <div className="social">
        <a href="#"><FontAwesomeIcon icon={["fab", "github"]} size="2x"/></a>
        <a href="#"><FontAwesomeIcon icon={["fab", "facebook"]} size="2x"/></a>
        <a href="#"><FontAwesomeIcon icon={["fab", "instagram"]} size="2x"/></a>
        <a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/></a>
      </div>
    </div>
  </div>
  )
}