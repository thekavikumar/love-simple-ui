//Toast.stories.tsx
import React from 'react'
import { Toast } from './index'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const ToastWarn = () =>{
    return (
        <Toast duration={3000} warn={true} title=' Warning' message='This is warning toast component!' icon={<WarningAmberIcon style={{fontSize:'30px',position:'relative',top:'8px'}}/>}/>
    )
}

export const ToastSuccess = () =>{
    return (
        <Toast duration={3000} success={true} title=' Success' message='Copied to clipboard successfully!' icon={<CheckCircleOutlineIcon style={{fontSize:'30px',position:'relative',top:'8px'}}/>}/>
    )
}

export const ToastError = () =>{
    return (
        <Toast duration={3000} error={true} title=' Error' message='This is error toast component!' icon={<ErrorOutlineIcon  style={{fontSize:'30px',position:'relative',top:'8px'}}/>}/>
    )
}

