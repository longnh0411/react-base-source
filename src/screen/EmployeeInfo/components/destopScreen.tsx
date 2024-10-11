import React from "react";
import LabelComponent from "./label";
import FormatService from "../../../utils/format";

const EmployeeDestopScreenComponent : React.FC<{ EmployeInfo : any, loading : boolean ,copyToClipboard : Function}> = ({
    EmployeInfo,
    loading,
    copyToClipboard = () => {}
}) => {
  return(
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
        <div className='flex w-10/12 md:w-10/12 lg:w-7/12 xl:w-5/12 bg-white rounded-2xl relative overflow-hidden'>
            <img className="absolute" src="./src/assets/bg_employee.png" alt="bg"/>
            <div className="w-full m-10 flex gap-10">
                <div className="relative flex flex-col w-2/5 rounded-2xl bg-white z-10 custom-box-shadow items-center overflow-hidden">
                    <div className="flex w-40 h-40 mt-10 rounded-full overflow-hidden border-solid border-8 border-orange-400 items-center justify-center">
                        <div className="flex w-full h-full rounded-full overflow-hidden border-solid border-2 border-white items-center justify-center">
                            { loading === true ?
                                <div className="loading-style w-40 h-40 flex"></div>
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
                    <img className="absolute bottom-0" src="./src/assets/footer_card_employee.png"/>
                </div>
                <div className="w-3/5 rounded-2xl bg-white z-10 custom-box-shadow relative overflow-hidden">
                    <img 
                        className="absolute w-3/5 right-0" 
                        src="./src/assets/header_card_employee.png"
                    />
                    <img 
                        className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                        src="./src/assets/bg_logo.png"
                    />
                    <div className="flex flex-col m-10 mt-20 gap-4">
                        <LabelComponent
                            key={'employeeCode'}
                            label="Mã NV:"
                            value={EmployeInfo?.employeeCode ?? ''}
                            loading={loading}
                        />
                        <LabelComponent
                            key={'officerTitle'}
                            label="Chức vụ:"
                            value={EmployeInfo?.officerTitle ?? ''}
                            loading={loading}
                        />

                        <LabelComponent
                            key={'organizationName'}
                            label="Đơn vị:"
                            value={EmployeInfo?.organizationName ?? ''}
                            loading={loading}
                        />

                        <LabelComponent
                            key={'email'}
                            label="Email:"
                            value={EmployeInfo?.email ?? ''}
                            loading={loading}
                        />

                        <LabelComponent
                            key={'startWorkDate'}
                            label="Ngày vào công ty:"
                            value={EmployeInfo?.startWorkDate ? FormatService.convertDateTimeToString(EmployeInfo?.startWorkDate) : ''}
                            loading={loading}
                        />

                        <LabelComponent
                            key={'phoneNumber'}
                            label="Số điện thoại:"
                            value={EmployeInfo?.phoneNumber ?? ''}
                            loading={loading}
                        />

                        <LabelComponent
                            key={'organizationAddress'}
                            label="Văn phòng làm việc:"
                            value={EmployeInfo?.organizationAddress ?? ''}
                            loading={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
        <button 
            className="
                text-white 
                cursor-pointer 
                text-xl 
                font-bold 
                btn-save
            "
            onClick={() => copyToClipboard()}
        >
            LƯU LIÊN HỆ
        </button>
    </div>
  )  
}

export default EmployeeDestopScreenComponent;