import React from "react";
import { Input,Form, FormProps, Checkbox, Button } from "antd";
import "./index.css";
import { T_LoginModel } from "./model";
import TextRequiredComponent from "../../component/TextRequired";

const LoginPageComponent : React.FC = () => {

    const onFinish: FormProps<T_LoginModel>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="bg-screen">
            <div 
                className="
                    w-3/12
                    p-12
                    rounded-xl 
                    bg-white 
                    shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] 
                    dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] 
                    dark:before:pointer-events-none 
                    dark:before:absolute dark:before:-inset-px 
                    dark:before:rounded-xl 
                    dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] 
                    forced-colors:outline
                "
            >
                <Form
                    name="loginForm"
                    layout="vertical"
                    initialValues={{ rememberMe : true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <span className="font-semibold text-lg flex mb-6">Đăng nhập</span>
                    <Form.Item<T_LoginModel>
                        label={<TextRequiredComponent label={"Tài khoản"}/>}
                        required={false}
                        name="userName"
                        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
                    >
                        <Input placeholder="Nhập tài khoản"/>
                    </Form.Item>

                    <Form.Item<T_LoginModel>
                        label={<TextRequiredComponent label={"Mật khẩu"}/>}
                        required={false}
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </Form.Item>

                    <div className="flex w-full justify-between">
                        <Form.Item<T_LoginModel>
                            name="rememberMe"
                            valuePropName="checked"
                        >
                            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <span className="text-base font-semibold cursor-pointer">Quên mật khẩu?</span>
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button className="w-full" type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>

                    <span className="text-sm text-gray-500">Chưa có tài khoản? <span className="text-black font-semibold cursor-pointer">Đăng ký</span></span>

                </Form>
            </div>
        </div>
        
    )
}

export default LoginPageComponent;