import React from 'react'
import { Toast } from './index'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const ToastWarn = () =>{
    return (
        <Toast duration={4000} warn={true} message='This is warning!' icon={<WarningAmberIcon style={{fontSize:'30px',position:'relative',top:'6px'}}/>}/>
    )
}

export const ToastSuccess = () =>{
    return (
        <Toast duration={4000} success={true} message='This is success' icon={<CheckCircleOutlineIcon style={{fontSize:'30px',position:'relative',top:'6px'}}/>}/>
    )
}

export const ToastError = () =>{
    return (
        <Toast duration={4000} error={true} message='This is error!' icon={<ErrorOutlineIcon  style={{fontSize:'30px',position:'relative',top:'6px'}}/>}/>
    )
}