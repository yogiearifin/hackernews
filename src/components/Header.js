import React from "react"
import "../assets/styles/header.scss"
import { Container, Row, Col} from 'reactstrap';
import { FaHackerNewsSquare  } from "react-icons/fa";
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <React.Fragment>
            <Container className="header-container">
                <Row className="header">
                    <Col className="header-head">
                        <h1><FaHackerNewsSquare />Hackernews Lite</h1>
                        <p>Hacked your news feed since 2020</p>
                    </Col>
                    <Col className="header-links">
                        <p><Link to="/">Latest News</Link></p>
                        <p><Link to="/best-news">Best News</Link></p>
                        <p><Link to="/jobs">Jobs</Link></p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Header