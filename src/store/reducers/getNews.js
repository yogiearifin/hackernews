const initialState = {
    newsId: [],
    news:[],
    bestNews:[],
    job:[]
}

const getNews = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        default:
            return{
                ...state
            }
        case "GET_STORY":
        return{
            ...state,
            news:payload
        }
        case "GET_STORY_IDS":
        return{
            ...state,
            newsId:payload
        }
        case "GET_BEST_STORY":
        return{
            ...state,
            bestNews:payload
        }
        case "GET_JOB_STORY":
        return{
            ...state,
            job:payload
        }
    }
}

export default getNews;