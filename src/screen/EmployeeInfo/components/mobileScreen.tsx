import React from "react";
import LabelComponent from "./label";
import FormatService from "../../../utils/format";

const EmployeeMobileScreenComponent : React.FC<{ EmployeInfo : any, loading : boolean, copyToClipboard : Function }> = ({
    EmployeInfo,
    loading,
    copyToClipboard = () => {},
}) => {
  return(
    <div className="flex flex-col mx-auto py-4 items-center gap-4 w-10/12">
        <div 
            className="relative flex flex-col w-full rounded-2xl bg-white z-10 custom-box-shadow items-center"
            style={{"paddingTop" : "10vh","paddingBottom" : "15vh"}}
        >
            <img 
                className="absolute top-0 object-cover"
                style={{"height" : "10vh","borderRadius": "1rem 1rem 0 0"}} 
                src="./src/assets/header_card_employee_profile.png"
                alt="header_card_employee_profile"
            />
            <div className="flex w-32 h-32 mt-4 rounded-full overflow-hidden border-solid border-8 border-orange-400 items-center justify-center">
                <div className="flex w-full h-full rounded-full overflow-hidden border-solid border-2 border-white items-center justify-center">
                    { loading === true ?
                        <div className="loading-style w-32 h-32 flex"></div>
                        : 
                        <img src={EmployeInfo?.avatar} alt="avatar"/>
                    }
                </div>
            </div>
            { loading === true ? 
                <div className="loading-style w-1/2 flex mt-6 h-5"></div>
                :
                <h3 className="font-bold text-xl text-orange-500 mt-6">
                    {EmployeInfo?.fullName ?? ''}
                </h3>
            }
            { loading === true ? 
                <div className="loading-style w-1/2 flex mt-4 h-4"></div>
                :
                <span className="text-base text-orange-900 mt-1">
                    {EmployeInfo?.careerTitle ?? ''}
                </span>
            }
            <div 
                className="flex w-full flex-col px-10 mt-4 gap-2"
            >
                <LabelComponent
                      key={'employeeCode'}
                      label="Mã NV:"
                      value={EmployeInfo?.employeeCode ?? ''}
                      loading={loading} isMobile={true}                />
                <LabelComponent
                      key={'officerTitle'}
                      label="Chức vụ:"
                      value={EmployeInfo?.officerTitle ?? ''}
                      loading={loading} isMobile={true}                />

                <LabelComponent
                      key={'organizationName'}
                      label="Đơn vị:"
                      value={EmployeInfo?.organizationName ?? ''}
                      loading={loading} isMobile={true}                />

                <LabelComponent
                      key={'email'}
                      label="Email:"
                      value={EmployeInfo?.email ?? ''}
                      loading={loading} isMobile={true}                />

                <LabelComponent
                      key={'startWorkDate'}
                      label="Ngày vào công ty:"
                      value={EmployeInfo?.startWorkDate ? FormatService.convertDateTimeToString(EmployeInfo?.startWorkDate) : ''}
                      loading={loading} isMobile={true}                />

                <LabelComponent
                      key={'phoneNumber'}
                      label="Số điện thoại:"
                      value={EmployeInfo?.phoneNumber ?? ''}
                      loading={loading} isMobile={true}                />

                <LabelComponent
                      key={'organizationAddress'}
                      label="Văn phòng làm việc:"
                      value={EmployeInfo?.organizationAddress ?? ''}
                      loading={loading} isMobile={true}                />
            </div>
            <img 
                className="absolute mt-20 w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                src="./src/assets/bg_logo.png"
            />
            <img 
                className="absolute bottom-0 w-full object-cover"
                style={{"height" : "15vh","borderRadius": "0 0 1rem 1rem"}} 
                src="./src/assets/footer_card_employee.png"
                alt="footer_card_employee"
            />
        </div>
        <button 
            className="
                text-white 
                cursor-pointer 
                text-xs 
                font-bold 
                btn-save
                h-12
                px-4
                content-center
                text-center
            "
            onClick={() => copyToClipboard()}
        >
            LƯU LIÊN HỆ
        </button>
    </div>
  )  
}

export default EmployeeMobileScreenComponent;