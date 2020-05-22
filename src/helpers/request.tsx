import axios from 'axios';
import { requestOptionsType, bucketsResponseType } from "../types";

const request = ({ path, ...options }: requestOptionsType):Promise<bucketsResponseType> => {
    // const URL = `http://roadmapservice.azurewebsites.net${path}`
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
      timeout: 1000,
    });
    const headers = {
      Accept: 'application/json',
      ...options.headers,
    };
  
    const params = {
      url: path,
      headers,
      ...options
    };
    return instance.request(params)
  }

  export default request;