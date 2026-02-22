import { Link } from "react-router-dom"

function MyFooter(){
    return(
        <div className="footer">
            <Link to="/about" className="footer-link">Más info.</Link>
            <a className="footer-link" href='https://github.com/toniferrer' target="blank">
                <img height={12} src="https://cdn-icons-png.flaticon.com/256/25/25231.png"/>
                GitHub
            </a>
        </div>
    )
}

export default MyFooter