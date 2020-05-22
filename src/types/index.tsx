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
      Accept?: string
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
    {type: typeof ADD_BUCKETS_DATA, data: bucketsResponseType } |
    {type: typeof BUCKETS_FETCH_FAILED } |
    {type: typeof BUCKETS_FETCH_SUCCEEDED, payload: bucketsResponseType }



export type CardDataTypes = {
  id: number;
  title: string;
  subTitle: string;
}
export interface CardPropTypes extends CardDataTypes {
  isLoading: boolean;
}

export type CardsColumnPropType = {
  title: string;
  data: CardPropTypes[];
  isLoading: boolean;
}

export interface HomePageViewPropType {
  loadData: () => void;
  data: CardPropTypes[];
  isLoading: boolean;
}

export type TextLoadingType = {
  width?: number | string;
  height?: number;
  style?: {[key: string]: string};
}