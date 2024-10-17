import { useLocation } from "react-router-dom";

const getParamInURL = (key : string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const value = searchParams.get(key);
    return value ? value : undefined; 
}

export const getImageUrl = (path: string) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
};

const utils = {
    getParamInURL,
    getImageUrl
}

export default utils;