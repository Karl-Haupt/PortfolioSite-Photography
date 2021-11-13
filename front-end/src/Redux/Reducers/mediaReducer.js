import {
    ALL_MEDIA_REQUEST,
    ALL_MEDIA_SUCCESS,
    ALL_MEDIA_FAIL,
    NEW_MEDIA_REQUEST,
    NEW_MEDIA_SUCCESS,
    NEW_MEDIA_RESET,
    NEW_MEDIA_FAIL,
    MEDIA_DETAILS_REQUEST,
    MEDIA_DETAILS_SUCCESS,
    MEDIA_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/mediaConstants';

export const mediaReducer = (state = { medias: [] }, action) => {
    switch (action.type) {
        case ALL_MEDIA_REQUEST:
            return {
                loading: true,
                medias: []
            }

        case ALL_MEDIA_SUCCESS:
            return {
                loading: false,
                medias: action.payload.photos
            }

        case ALL_MEDIA_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
};

export const newMediaReducer = (state = { media: {} }, action) => {
    switch (action.type) {
        case NEW_MEDIA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_MEDIA_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                media: action.payload.photos
            }
        case NEW_MEDIA_FAIL:
            return {
                ...state,
                error: action.payload.error
            }
        case NEW_MEDIA_RESET: 
            return {
                ...state,
                success: false
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export const mediaDetailsReducer = ( state = { media: {}}, action ) => {
    switch ( action.type ) {
        case MEDIA_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MEDIA_DETAILS_SUCCESS: 
            return {
                loading: false,
                media: action.payload
            }
        case MEDIA_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};