import { ADD_BUCKETS_DATA } from "../constants/buckets";
import { bucketsResponseType, bucketReducerActionTypes } from "../types";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
}
const buckets = (state: bucketsResponseType = initialState, action: bucketReducerActionTypes) => {
  switch(action.type) {
    case ADD_BUCKETS_DATA: {
      return {
        ...state,
        data: [...action.data],
        isLoading: true
      }
    }
    default: {
      return state;
    }
  }
}

export default buckets;