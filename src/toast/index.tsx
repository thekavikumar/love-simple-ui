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
    duration?: number;
    icon?: React.ReactElement;
    title?: string;
}

setup(React.createElement)

const ToastContainer = styled("div")<ToastProps>`
    background: ${(props)=> 
        props.error 
        ? 'rgb(239 68 68)'
        : props.success
        ? 'rgb(34 197 94)'
        : props.warn
        ? 'rgb(234 179 8)' 
        : '#fffff'   
    };
    color: ${(props)=> 
        props.message
        ? '#000000'
        : '#F5FEFD'
    };
    height:100px;
    width:420px;
    border: 1px solid;
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
    position: relative;
    bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
`

const CrossButton = styled('button')<ToastProps>`
    position: absolute;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    left: 27.5rem;
    font-size:25px;
`

export const Toast: FC<ToastProps> = ({
    id,
    label,
    error,
    message,
    success,
    warn,
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
            className='shadow-xl border-none'
            title={title}
            {...props}>
                <CrossButton className='cursor-pointer' onClick={toggle}>x</CrossButton>
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
