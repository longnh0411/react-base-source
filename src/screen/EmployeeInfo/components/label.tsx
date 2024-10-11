import React from "react"

const LabelComponent : React.FC<{ loading: boolean; label: string; value: any,isMobile? : boolean}> = ({
    loading,
    label,
    value,
    isMobile = false,
}) => {
    return (
        <span className={["text-base gap-2 items-center", loading === true ? "flex" : null].join(" ")} >
            <b className={["whitespace-nowrap",isMobile === true && 'text-sm'].join(" ")}>{label}</b> 
            { loading === true ? 
                <span className="loading-style w-full h-3"></span> : 
                <span className={[isMobile === true && 'text-sm'].join(" ")}>{" " +value}</span>
            }
        </span>
    )
}

export default LabelComponent