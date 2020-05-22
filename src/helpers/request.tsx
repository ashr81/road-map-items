import { requestOptionsType, bucketsResponseType } from "../types";

const request = ({ path, ...options }: requestOptionsType):Promise<bucketsResponseType> => {
    // const URL = `http://roadmapservice.azurewebsites.net${path}`
    const URL = `${process.env.REACT_APP_API_URL}${path}`
    const config = {
      method: 'GET',
      ...options,
    }; 
    const headers = {
      Accept: 'application/json',
      ...config.headers,
    };
  
    const params = {
      headers,
      method: config.method
    };
    return fetch(URL, params)
            .then(response => response.json())
  }

  export default request;