import request from "../helpers/request";
import { requestOptionsType } from "../types";

class BucketsApi {
  static fetch(options: requestOptionsType) {
    return request({path: '/api/buckets', ...options})
  }
}

export default BucketsApi;