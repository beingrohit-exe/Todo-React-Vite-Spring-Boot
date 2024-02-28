import React, { useEffect, useRef, useState } from 'react'

const TextField = ({label}) => {

    const inputRef  = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(()=> {
        const inputElement = inputRef.current;

        if (inputElement) {
            inputElement.addEventListener('focus', ()=> setIsFocused(true));
            inputElement.addEventListener('blur', ()=> setIsFocused(false));
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('focus', ()=> setIsFocused(true));
                inputElement.removeEventListener('blur', ()=> setIsFocused(false));
            }
        }
    }, [])

    return (
        <div className="input-main" style={{
            border: isFocused ? '2px solid rgba(0, 0, 0, 0.4)' : '2px solid rgba(0, 0, 0, 0.1)'
        }}>
            <span>{label}</span>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default TextField;