const API_URL = {
    getEmployeeByQRCode : "/DigitalProfile/GetEmployeeIdentifier",
    authService : {
        login : "/api/user/login",
    }
}

const SERVER_URL = (import.meta as any).env.VITE_API_URL;

const ConfigConst = {
    API_URL,
    SERVER_URL,
}

export default ConfigConst;