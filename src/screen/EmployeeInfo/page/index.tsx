import React, { useEffect, useState } from "react";
import ConfigConst from "../../../config";
import ApiService from "../../../utils/api_serice";
import FormatService from "../../../utils/format";
import "./index.css"
import { EmployeeInfoOutput } from "../model/output";
import LabelComponent from "../components/label";
import utils from "../../../utils/utils";
import EmployeeMobileScreenComponent from "../components/mobileScreen";
import EmployeeDestopScreenComponent from "../components/destopScreen";
import { ShowErrorMessage, ShowSuccessMessage } from "../../../utils/toast";

const EmployeeInfo = () => {
    const [EmployeInfo, setEmployeInfo] = useState<EmployeeInfoOutput | null>();
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
    let token = utils.getParamInURL('token');

    useEffect(() => {
        if(token){
            getData(token);
        }
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        
        const updateIsMobile = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addListener(updateIsMobile);

        return () => {
            mediaQuery.removeListener(updateIsMobile);
        };
    }, []);

    const getData = async (token : string | undefined) => {
        setLoading((valueCurent) => {
            return valueCurent = true;
        });
        let res = await ApiService.get(
            ConfigConst.API_URL.getEmployeeByQRCode +
                "?" +
                FormatService.convertObjectToStringParam({
                token : token
            })
        );
        if (res) {
            setEmployeInfo((curentValue) => {
                return (curentValue = res.result);
            });
            setTimeout(() => {
                setLoading((valueCurent) => {
                    return valueCurent = false;
                });
            }, 500);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(EmployeInfo?.phoneNumber.toString() ?? '')
            .then(() => {
                ShowSuccessMessage("Sao chép liên hệ thành công.");
            })
            .catch((error) => {
                ShowErrorMessage("Sao chép liên hệ thất bại.")
            });
    };

    return (
        <>
            { isMobile === true &&
                <div className="w-full h-full flex overflow-scroll">
                    <EmployeeMobileScreenComponent 
                        EmployeInfo={EmployeInfo} 
                        loading={loading}
                        copyToClipboard={copyToClipboard}               
                    />
                </div>
            }

            { isMobile === false &&
                <EmployeeDestopScreenComponent
                    EmployeInfo={EmployeInfo} 
                    loading={loading}
                    copyToClipboard={copyToClipboard}
                />
            }
        </>
    );
};

export default EmployeeInfo;
