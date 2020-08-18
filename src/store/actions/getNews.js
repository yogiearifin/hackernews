import axios from 'axios';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json?print=pretty&orderBy="$key"&limitToFirst=10`;
export const bestStoriesUrl = `${baseUrl}beststories.json?print=pretty&orderBy="$key"&limitToFirst=10`;
export const jobStoriesUrl = `${baseUrl}jobstories.json?print=pretty&orderBy="$key"&limitToFirst=10`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = () => async dispatch => {
    try {
        const response = await axios.get (newStoriesUrl);
        if (response.ok === false) {
            throw new Error("Response Error")
        }
        console.log("json", response)
        const json = await response.data;
        const promises = json.map((id) =>  axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(
            response => {
                console.log(response)
                return response.data}
        ))
        const result = await Promise.all(promises)
        dispatch({
            type: "GET_STORY",
            payload:result
        })
        console.log("result", result)
    }
    catch(error) {
        console.log(error)
    }
};

export const getBestStory = () => async dispatch => {
    try {
        const response = await axios.get (bestStoriesUrl);
        if (response.ok === false) {
            throw new Error("Response Error")
        }
        console.log("json", response)
        const json = await response.data;
        const promises = json.map((id) =>  axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(
            response => {
                console.log(response)
                return response.data}
        ))
        const result = await Promise.all(promises)
        dispatch({
            type: "GET_BEST_STORY",
            payload:result
        })
        console.log("result", result)
    }
    catch(error) {
        console.log(error)
    }
};

export const jobStory = () => async dispatch => {
    try {
        const response = await axios.get (jobStoriesUrl);
        if (response.ok === false) {
            throw new Error("Response Error")
        }
        console.log("json", response)
        const json = await response.data;
        const promises = json.map((id) =>  axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(
            response => {
                console.log(response)
                return response.data}
        ))
        const result = await Promise.all(promises)
        dispatch({
            type: "GET_JOB_STORY",
            payload:result
        })
        console.log("result", result)
    }
    catch(error) {
        console.log(error)
    }
};

export const getStoryIds = () => async dispatch => {
    try {
        const res = await axios.get(newStoriesUrl)
        dispatch({
            type: "GET_STORY_IDS",
            payload:res.data
        })
        console.log("this is res id", res)
    }
    catch (error) {
        console.log(error)
    }
};