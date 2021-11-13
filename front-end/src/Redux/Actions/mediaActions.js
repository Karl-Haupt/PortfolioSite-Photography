import axios from 'axios';
import {
    ALL_MEDIA_REQUEST,
    ALL_MEDIA_SUCCESS,
    ALL_MEDIA_FAIL,
    NEW_MEDIA_REQUEST,
    NEW_MEDIA_SUCCESS,
    NEW_MEDIA_FAIL,
    MEDIA_DETAILS_REQUEST,
    MEDIA_DETAILS_SUCCESS,
    MEDIA_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/mediaConstants';

//Get all photos
export const getMediaFiles = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_MEDIA_REQUEST })

        const { data } = await axios.get('/api/v1/photos');

        dispatch({
            type: ALL_MEDIA_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({ 
            type: ALL_MEDIA_FAIL, 
            payload: error.response.data.message
        });
    }
};

//Add Photo
export const addMedia = (mediaData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_MEDIA_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/photos/new`, mediaData, config)

        dispatch({
            type: NEW_MEDIA_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_MEDIA_FAIL,
            payload: error.response.data.message
        })
    }
};

//Get single media
export const getMediaDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: MEDIA_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/photos/${id}`)

        dispatch({
            type: MEDIA_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: MEDIA_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};


//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};