import React from "react";
import "./index.css";
import utils from "../../utils/utils";

const NotFoundComponent = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center bg-gray-50">
      <img src={utils.getImageUrl("404-Error.svg")} alt="404" />
      <div className="flex flex-col text-center gap-8">
        <h1 className="font-bold text-4xl">Không tìm thấy trang</h1>
        <div className="text-base" style={{"lineHeight": "1rem"}}>
          <p>Xin lỗi nhưng trang bạn đang tìm kiếm không tồn tại.</p><br></br>
          <p>Có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
