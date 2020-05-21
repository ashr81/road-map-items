import { bucketsResponseType } from '../types';
import { ADD_BUCKETS_DATA } from '../constants/buckets';

export const setBucketsData = (buckets: bucketsResponseType) => ({
    type: ADD_BUCKETS_DATA,
    buckets
})