//Toast/index.tsx
import { keyframes, setup, styled } from 'goober'
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

const movingLineAnimation = keyframes`
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(100%);
    }
`;

const MovingLine = styled("hr")<ToastProps>`
    border: none;
    height: 2px;
    background-color: white;
    animation: ${movingLineAnimation} 3s linear infinite;
`;

const ToastTitle = styled("h2")<ToastProps>`
    font-size: 20px;
    margin: auto;
    padding: 15px;
`

const CrossButton = styled('button')<ToastProps>`
    position: absolute;
    background: none;
    font-size:25px;
    border: none;
    color: white;
    cursor: pointer;
    left: 27rem;
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
    const toggle = () =>{
        setShow(false)
    }
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
                <CrossButton onClick={toggle}>x</CrossButton>
                <ToastTitle>
                    {icon}
                    {title}
                    <MovingLine/>
                    {message}
                </ToastTitle>
            </ToastContainer>
        </Fragment>
    )
}
