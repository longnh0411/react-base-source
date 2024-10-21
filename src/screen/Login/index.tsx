import React from "react";
import { Input,Form, FormProps, Checkbox, Button } from "antd";
import "./index.css";
import { T_LoginModel } from "./model";
import TextRequiredComponent from "../../component/TextRequired";
import utils from "../../utils/utils";

const LoginPageComponent : React.FC = () => {

    const onFinish: FormProps<T_LoginModel>['onFinish'] = (values) => {
        console.log('Success:', values);
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
                        name="userName"
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

                    <div className="flex items-center w-full">  
                        <div className="border-t border-gray-300 flex-1"></div>
                        <span className="hidden sm:hidden md:hidden lg:block xl:block px-4 text-base font-normal" style={{"color" : "#313957"}}>hoặc</span>
                        <span className="block sm:block md:block lg:hidden xl:hidden     px-4 text-base font-normal" style={{"color" : "#313957"}}>hoặc đăng nhập với</span>
                        <div className="border-t border-gray-300 flex-1"></div>
                    </div>

                    <div className="flex w-full flex-row lg:flex-col xl:flex-col mt-6 gap-4 items-center">
                        <Button className="w-full h-12 text-base text-left flex items-center justify-center" style={{"backgroundColor" : "#F3F9FA","color" : "#313957"}} type="primary" htmlType="submit">
                            <img className="mr-2" src={utils.getImageUrl("Google.svg")} alt="google logo" /> 
                            Google
                        </Button>

                        <Button className="w-full h-12 text-base text-left flex items-center justify-center" style={{"backgroundColor" : "#F3F9FA","color" : "#313957"}} type="primary" htmlType="submit">
                            <img className="mr-2" src={utils.getImageUrl("Facebook.svg")} alt="facebook logo" /> 
                            FaceBook
                        </Button>
                    </div>
                    
                    <div className="w-full flex items-center justify-center mt-12">
                        <span className="text-lg">Không có tài khoản? <span style={{"color":"#1E4AE9"}}>Đăng ký</span></span>
                    </div>
                </Form>
            </div>
            <div className="w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 rounded-3xl overflow-hidden h-full">
                <img className="w-full h-full object-cover" src={utils.getImageUrl("login_wallper.svg")} alt={"login wallper"}/>
            </div>
        </div>
        
    )
}

export default LoginPageComponent;