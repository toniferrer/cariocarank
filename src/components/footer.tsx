import { Link } from "react-router-dom"

function MyFooter(){
    return(
        <div className="footer">
            <Link to="/about" className="footer-link">Más info.</Link>
            <a className="footer-link" href='https://github.com/toniferrer' target="blank">GitHub</a>
        </div>
    )
}

export default MyFooter