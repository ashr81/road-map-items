import { bucketsResponseType } from '../types';
import { ADD_BUCKETS_DATA, BUCKETS_FETCH_REQUESTED } from '../constants/buckets';

export const setBucketsData = (buckets: bucketsResponseType) => ({
    type: ADD_BUCKETS_DATA,
    buckets
})

export const loadBucketsData = () => ({
    type: BUCKETS_FETCH_REQUESTED,
    payload: {
        options: {}
    }
})