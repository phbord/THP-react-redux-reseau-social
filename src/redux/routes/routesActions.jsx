import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './routesTypes'

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST
  }
}

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    news
  }
}

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    error
  }
}