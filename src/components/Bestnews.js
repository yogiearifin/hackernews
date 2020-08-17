import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getBestStory } from "../store/actions/getNews"
import Moment from 'react-moment';
import { Container, Row, Col} from 'reactstrap';

const Hackernews = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.getNews.bestNews)
    console.log(news)

    useEffect(()=> {
        dispatch(getBestStory())
    }, [dispatch] )

    return(
        <>
            <Container className="news-container">
                <h1 className="news-header">Best handpicked news from us</h1>
                {news && news.map(news => 
                <Container className="news">
                    <p><a href={news.url}>{news.title}</a></p>
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