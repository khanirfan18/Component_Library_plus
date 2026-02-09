import React from "react"
import clsx from 'clsx'
export default function Badge({children, color, type}) {
    
    const classFix = clsx(
            "badge",
            color && color.toLowerCase(),
            type && type.toLowerCase()
    )
    return (
        <button className={classFix}>
            {children}    
        </button>
    )
}