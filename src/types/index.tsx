import {
  BUCKETS_FETCH_FAILED,
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
  /**
   * data object on state passed to buckets page.
   */
  data: bucketsResponseType;
  /**
   * Flag to show data is loading.
   */
  isLoading: boolean;
  /**
   * Flag to show message to user on error.
   */
  isError: boolean;
}

export type MainContainerPropTypes = {
    children: React.ReactElement
}

export type bucketReducerActionTypes = |
    {type: typeof BUCKETS_FETCH_FAILED } |
    {type: typeof BUCKETS_FETCH_SUCCEEDED, payload: bucketsResponseType }


/**
 * Data structure of each card element on buckets page.
 */
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
  /**
   * loadData: dispatch function that helps load data.
   * Call the function to update with new data.
   */
  loadData: () => void;
  /**
   * Data obtained by API is updated here and passed to present views.
   */
  data: CardPropTypes[];
  /**
   * State to show loading symbols in cards view.
   */
  isLoading: boolean;
}

export type TextLoadingType = {
  /**
   * Text loading using react-content-loader which specifies widhth
   */
  width?: number;
  /**
   * Height of the loader.
   */
  height?: number;
  style?: {[key: string]: string};
}