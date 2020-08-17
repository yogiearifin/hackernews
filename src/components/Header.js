import React from "react"
import "../assets/styles/header.scss"
import { Container, Row, Col} from 'reactstrap';
import { FaHackerNewsSquare  } from "react-icons/fa";

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
                        <p><a href="/">Latest News</a></p>
                        <p><a href="/best-news">Best News</a></p>
                        <p><a href="job">Jobs</a></p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Header