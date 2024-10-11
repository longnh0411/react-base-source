import { useLocation } from "react-router-dom";

const getParamInURL = (key : string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const value = searchParams.get(key);
    return value ? value : undefined; 
}

const utils = {
    getParamInURL
}

export default utils;