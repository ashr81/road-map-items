import {
  ADD_BUCKETS_DATA, BUCKETS_FETCH_FAILED,
  BUCKETS_FETCH_REQUESTED, BUCKETS_FETCH_SUCCEEDED
} from '../constants/buckets';
export type requestOptionsType = {
    /**
     * Method type to make the API requests.
     */
    method?: 'GET' | 'POST' | 'PUT',
    /**
     * Set headers based on request/response.
     */
    headers: {
        Accept?: string,
        'Content-Type'?: string
    },
    /**
     * API relative path to the original url given.
     */
    path?: string;
}

export type bucketsResponseType = any;

export type bucketsSagaActionType = {
  type: typeof BUCKETS_FETCH_REQUESTED;
  payload: {
    options: requestOptionsType;
  }
}

export type bucketsStateType = {
    data: bucketsResponseType;
    isLoading: boolean;
    isError: boolean;
}

export type MainContainerPropTypes = {
    children: React.ReactElement
}

export type bucketReducerActionTypes = |
    {type: typeof ADD_BUCKETS_DATA, data: bucketsResponseType }


export type CardPropTypes = {
  id: number;
  title: string;
  subTitle: string;
  isLoading: boolean;
}

export type HomePageViewPropType = {
  data: CardPropTypes[];
  isLoading: boolean;
}

export interface CardsColumnPropType extends HomePageViewPropType {}