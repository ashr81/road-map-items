import { requestOptionsType, bucketsResponseType } from "../types";

const request = ({ path, ...options }: requestOptionsType):Promise<bucketsResponseType> => {
    const URL = `http://roadmapservice.azurewebsites.net${path}`
    const config = {
      method: 'GET',
      ...options,
    }; 
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...config.headers,
    };
  
    const params = {
      headers,
      method: config.method
    };
    return fetch(URL, params)
  }

  export default request;