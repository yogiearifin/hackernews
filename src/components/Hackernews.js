import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getStory } from "../store/actions/getNews"
import "../assets/styles/hackernews.scss"
import Moment from 'react-moment';
import { Container, Row, Col} from 'reactstrap';
import Header from "./Header"

const Hackernews = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.getNews.news)
    console.log(news)

    useEffect(()=> {
        dispatch(getStory())
    }, [dispatch] )

    return(
        <>
            <Header />
            <Container className="news-container">
                <h1 className="news-header">Latest news from our world</h1>
                {news && news.map(news => 
                <Container className="news">
                    <ul>
                        <p><li><a href={news.url}>{news.title}</a></li></p>
                    </ul>
                    <Row className="news-content">
                        <Col>
                            <p>by {news.by}</p>
                        </Col>
                        <Col className="news-item">
                            <p>posted on: <Moment format="DD/MM/YYYY" unix>{news.time}</Moment></p>
                        </Col>
                    </Row>
                </Container>
                )}
            </Container>
        </>
    )
}

export default Hackernews