import React, { useState } from "react";
import { Input,Form, FormProps, Checkbox, Button } from "antd";
import "./index.css";
import { T_LoginModel } from "./model";
import TextRequiredComponent from "../../component/TextRequired";
import utils from "../../utils/utils";
import ApiService from "../../utils/api_serice";
import ConfigConst from "../../config";
import { OTPProps } from "antd/es/input/OTP";
import ModalComponent from "../../component/Modal";

const LoginPageComponent : React.FC = () => {

    const [openModal, setOpenModal] = useState(false);

    const onFinish: FormProps<T_LoginModel>['onFinish'] = async (values) => {
        let body = {
            username : values.username,
            password : values.password,
            remember : values.remember
        }
        let res = await ApiService.post(ConfigConst.API_URL.authService.login, body);
        if(res){
            console.log("res: ", res);
        }
    };

    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
      };
    
      const onInput: OTPProps['onInput'] = (value) => {
        console.log('onInput:', value);
      };
    
      const sharedProps: OTPProps = {
        onChange,
        onInput,
      };

    return (
        <div className="wrap-login-page flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row">
            <div className="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 flex items-center justify-center">
                <Form
                    name="loginForm"
                    layout="vertical"
                    initialValues={{ rememberMe : true }}
                    onFinish={onFinish}
                    className="w-full sm:w-full md:w-10/12 lg:w-8/12 xl:w-6/12"
                    autoComplete="off"
                >
                    <span className="font-bold text-3xl flex mb-6" style={{"color" : "#0C1421"}}>Welcome Back 👋</span>
                    <span className="font-normal text-xl" style={{"color" : "#313957"}}>Today is a new day. It's your day. You shape it. 
                    Sign in to start managing your projects.</span>
                    <Form.Item<T_LoginModel>
                        label={<TextRequiredComponent label={"Tài khoản"}/>}
                        required={false}
                        name="username"
                        className="mt-12"
                        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
                    >
                        <Input className="h-12" placeholder="Nhập tài khoản"/>
                    </Form.Item>

                    <Form.Item<T_LoginModel>
                        label={<TextRequiredComponent label={"Mật khẩu"}/>}
                        required={false}
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password className="h-12" placeholder="Nhập mật khẩu" />
                    </Form.Item>

                    <div className="flex w-full justify-end">
                        <Form.Item>
                            <span className="text-base font-semibold cursor-pointer" style={{"color" : "#1E4AE9"}}>Quên mật khẩu?</span>
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button className="w-full h-12 text-white text-xl" style={{"backgroundColor" : "#162D3A"}} type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    
                    <Input.OTP length={6} size="large" autoFocus {...sharedProps} />
                    <div className="w-full flex items-center justify-center mt-12">
                        <span onClick={()=> setOpenModal(true)} className="text-lg">Không có tài khoản? <span style={{"color":"#1E4AE9"}}>Đăng ký</span></span>
                    </div>
                </Form>
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 rounded-3xl overflow-hidden h-full">
                <img className="w-full h-full object-cover" src={utils.getImageUrl("login_wallper.svg")} alt={"login wallper"}/>
            </div>
            { openModal === true && 
                <ModalComponent 
                    open={openModal} 
                    setOpen={setOpenModal}
                    width={500}
                    emitAction={(event : any)=> {
                        console.log("event",event);
                    }} 
                    headerContent={"Test nè"}
                    customFooter={
                        <div>
                            footer nwe2
                        </div>
                    }            
                >
                    <span>Oke la</span>
                </ModalComponent>
            }
        </div>
        
    )
}

export default LoginPageComponent;