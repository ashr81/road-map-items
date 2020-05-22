import { BUCKETS_FETCH_REQUESTED } from '../constants/buckets';

export const loadBucketsData = () => ({
    type: BUCKETS_FETCH_REQUESTED,
    payload: {
        options: {}
    }
})