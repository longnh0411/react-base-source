import React from "react";


const TextRequiredComponent : React.FC<{label : string}>= ({
    label = '',
}) => {
    return (
        <span className="text-base font-medium">{label} <span className="text-red-500">*</span></span>
    );
}
export default TextRequiredComponent