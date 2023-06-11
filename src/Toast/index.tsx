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
    icon?: React.ReactElement;
}

setup(React.createElement)

const ToastContainer = styled("div")<ToastProps>`
    font-size: 25px;
    background: ${(props)=> 
        props.error 
        ? '#ff3333'
        : props.success
        ? '#339900'
        : props.warn
        ? '#ffcc00' 
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
    icon,
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
                {icon}
               {message}
            </ToastContainer>
        </Fragment>
    )
}