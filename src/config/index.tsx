const API_URL = {
    getEmployeeByQRCode : "/DigitalProfile/GetEmployeeIdentifier",
    authService : {
        login : "/api/user/login",
    }
}

const SERVER_URL = (import.meta as any).env.VITE_API_URL;

const GOOGLE_ANALYTICS_ID = "G-WM00950XN7"

const ConfigConst = {
    API_URL,
    SERVER_URL,
    GOOGLE_ANALYTICS_ID,
}

export default ConfigConst;