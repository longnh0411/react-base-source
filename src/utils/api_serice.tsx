// api.service.js
import axios from "axios";
import ConfigConst from "../config";
import { ShowErrorMessage } from "./toast";


const API_URL = ConfigConst.SERVER_URL; // Thay thế bằng URL của API bạn muốn gọi
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijg3OTMiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwiRW1wbG95ZWVJZENsYWltIjoiODc5MiIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy9pbXBlcnNvbmF0b3JUZW5hbnRJZCI6IjEiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvaW1wZXJzb25hdG9yVXNlcklkIjoiMiIsInN1YiI6Ijg3OTMiLCJqdGkiOiI1YTc5NzlkOC01NTIwLTQ3ZmUtODQ3MS1kZjAyOTVlZGIxMjYiLCJpYXQiOjE3MjgzNTYzMTUsIm5iZiI6MTcyODM1NjMxNSwiZXhwIjoxNzM2MTMyMzE1LCJpc3MiOiJBYnBDb3JlIiwiYXVkIjoiQWJwQ29yZSJ9.QSJZN9WPpLBL_vvsEsC9hiNeot2ra7wNN6C0CpzcHLI"
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    'Cache-Control': 'no-cache',
    "Authorization" : `Bearer ${token}`,
  },
});

const handerError = (error : any) => {
  if(error.code === "ERR_NETWORK"){
    ShowErrorMessage("Không thể kết nối đến máy chủ.");
  }else{
    ShowErrorMessage(error?.response?.data?.message);
  }
}

const ApiService = {
  get: async (endpoint : string, params = {}) => {
    try {
      const response = await axiosInstance.get(endpoint, { params });
      if(response.status === 200){
        return response.data;
      }
    } catch (error) {
      handerError(error);
    }
  },

  post: async (endpoint : string, data = {}) => {
    try {
      const response = await axiosInstance.post(endpoint, data);
      if(response.status === 200){
        return response.data;
      }
    } catch (error) {
      console.log("error: ", error);
      handerError(error);
    }
  },

  put: async (endpoint : string, data = {}) => {
    try {
      const response = await axiosInstance.put(endpoint, data);
      if(response.status === 200){
        return response.data;
      }
    } catch (error) {
      handerError(error);
    }
  },

  delete: async (endpoint : string, params = {}) => {
    try {
      const response = await axiosInstance.delete(endpoint, { params });
      if(response.status === 200){
        return response.data;
      }
    } catch (error) {
      handerError(error);
    }
  },
};

export default ApiService;
