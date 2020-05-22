/**
 * Helper function to encapsulate services logic with common
 * headers, options at one place.
 */
import axios from 'axios';
import { requestOptionsType, bucketsResponseType } from "../types";

const request = ({ path, ...options }: requestOptionsType):Promise<bucketsResponseType> => {
    // const URL = `http://roadmapservice.azurewebsites.net${path}`
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
      timeout: 5000,
    });
    const headers = {
      Accept: 'application/json',
      ...options.headers,
    };
  
    const params = {
      url: path,
      ...options,
      headers,
    };
    return instance.request(params)
  }

  export default request;