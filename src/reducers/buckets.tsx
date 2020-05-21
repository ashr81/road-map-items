import { ADD_BUCKETS_DATA, BUCKETS_FETCH_FAILED, BUCKETS_FETCH_SUCCEEDED } from "../constants/buckets";
import { bucketsResponseType, bucketReducerActionTypes } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  isError: false
}
const buckets = (state: bucketsResponseType = initialState, action: bucketReducerActionTypes) => {
  console.log(action.type)
  switch(action.type) {
    case ADD_BUCKETS_DATA: {
      return {
        ...state,
        data: [...action.data],
        isLoading: true
      }
    }
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
        data: [{
          title: 'Title 1',
          data: [
            {id: 1, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 2, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 3, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 4, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 5, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 6, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
          ],
        },{
          title: 'Title 2',
          data: [
            {id: 7, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 8, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 9, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 10, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 11, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 12, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
          ],
        },{
          title: 'Title 3',
          data: [
            {id: 13, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 14, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 15, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 16, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 17, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 18, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
          ],
        },{
          title: 'Title 4',
          data: [
            {id: 7, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 8, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 9, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 10, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 11, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 12, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
          ],
        },{
          title: 'Title 5',
          data: [
            {id: 7, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 8, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 9, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 10, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 11, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
            {id: 12, title: 'asdjkahdjkashfjk', subTitle: 'To reduce repetition, you might want to define a reusable AppThunk type once, in your store file, and then use that type whenever you write a thunk:'},
          ],
        }]
      }
    }
    default: {
      return state;
    }
  }
}

export default buckets;