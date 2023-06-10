import { setup, styled } from 'goober'
import React,{useState,useEffect,FC, Fragment} from 'react'

export interface ToastProps{
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    warn?: boolean;
    className?: string;
    duration?: number;
}

setup(React.createElement)

const ToastContainer = styled("div")<ToastProps>`
    font-size: 20px;
    background: ${(props)=> 
        props.error 
        ? '#FF2400'
        : props.success
        ? '#7CFC00'
        : props.warn
        ? '#FFE14C' 
        : '#fffff'   
    };
    color: ${(props)=> 
        props.message
        ? '#000000'
        : '#F5FEFD'
    };
    height:70px;
    width:380px;
    border: '1px solid';
    text-align: center;
`;

export const Toast: FC<ToastProps> = ({
    id,
    label,
    error,
    message,
    success,
    warn,
    className,
    duration,
    ...props
})=>{
    const [show,setShow] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShow(false)
        },duration)
        return ()=> clearTimeout(timer)
    },[duration])
    if(!show)
    {
        return null
    }
    return (
        <Fragment>
            <ToastContainer 
            id={id}
            label={label}
            error={error}
            success={success}
            warn={warn}
            className={className}
            {...props}>
                {message}
            </ToastContainer>
        </Fragment>
    )
}