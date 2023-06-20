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
    title?: string;
}

setup(React.createElement)

const ToastContainer = styled("div")<ToastProps>`
    background: ${(props)=> 
        props.error 
        ? '#DC143C'
        : props.success
        ? '#339900'
        : props.warn
        ? '#FFE302' 
        : '#fffff'   
    };
    color: ${(props)=> 
        props.message
        ? '#000000'
        : '#F5FEFD'
    };
    height:120px;
    width:420px;
    border: 1px solid;
    border-radius: 10px;
`;

const ToastTitle = styled("h2")<ToastProps>`
    font-size: 20px;
    margin: auto;
    padding: 15px;
`

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
    title,
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
            title={title}
            {...props}>
                <ToastTitle>
                    {icon}
                    {title}
                    <hr style={{borderTop: '2px solid white'}} />
                    {message}
                </ToastTitle>
            </ToastContainer>
        </Fragment>
    )
}