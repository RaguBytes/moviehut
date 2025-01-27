import { Link } from "react-router-dom"
import pageNotFoundImg from "../assets/pageNotFound.png"


export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={pageNotFoundImg} className="img-fluid" />
      <p className="text-center">
        <Link to="/" className="stretched-link"></Link>
      </p>
    </div>
  )
}
