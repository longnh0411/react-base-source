import React from "react";
const NotFoundComponent = () => {
    return  (
        <div className="w-full h-full flex items-center justify-center">
            <div 
                className="
                    w-full 
                    md:w-2/3 lg:w-2/3 xl:w-2/3
                    flex flex-col md:flex-row lg:flex-row xl:flex-row
                    items-center justify-center
                "
            >
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-8 md:px-0 lg:px-0 xl:px-0">
                    <img 
                        src="/space_logo.svg" 
                        alt="space_logo" 
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-8 md:px-0 lg:px-0 xl:px-0">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Ồ không! Bạn bị lạc..</h2>
                    <p className="text-base mb-8">
                        Trang bạn đang tìm kiếm không tồn tại. Làm thế nào bạn đến đây là một bí ẩn.<br></br> Nhưng bạn có thể nhấp vào nút dưới đây để quay lại trang chủ.
                    </p>
                    <button className="btn green px-8 py-4 text-xl md:text-2xl font-bold">
                        Trang chủ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundComponent;