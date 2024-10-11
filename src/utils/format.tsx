import moment from "moment";

const convertObjectToStringParam = (objectData : any) =>{
    const params = new URLSearchParams();
  
    for (const key in objectData) {
      if (objectData.hasOwnProperty(key) && objectData[key] !== undefined && objectData[key] !== null) {
        params.append(key, objectData[key]);
      }
    }
    return params.toString();
}

const convertDateTimeToString = (date : any,format : string = "DD-MM-YYYY") => {
    if(date){
        return moment(date).format(format);
    }
    return null;
}

const FormatService = {
    convertObjectToStringParam,
    convertDateTimeToString,
}

export default FormatService;
