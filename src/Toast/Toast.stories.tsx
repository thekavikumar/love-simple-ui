import React from 'react'
import { Toast } from './index'

export const ToastWarn = () =>{
    return (
        <Toast duration={4000} warn={true} message='This is warning!'/>
    )
}

export const ToastSuccess = () =>{
    return (
        <Toast duration={4000} success={true} message='This is success'/>
    )
}

export const ToastError = () =>{
    return (
        <Toast duration={4000} error={true} message='This is error!'/>
    )
}