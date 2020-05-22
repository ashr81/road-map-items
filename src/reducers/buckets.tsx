import { BUCKETS_FETCH_FAILED, BUCKETS_FETCH_SUCCEEDED } from "../constants/buckets";
import { bucketsResponseType, bucketReducerActionTypes } from "../types";
import initalBucketsData from '../.data/initial-buckets.json';

const initialState = {
  data: initalBucketsData,
  isLoading: true,
  isError: false
}
const buckets = (state: bucketsResponseType = initialState, action: bucketReducerActionTypes) => {
  switch(action.type) {
    case BUCKETS_FETCH_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case BUCKETS_FETCH_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default buckets;