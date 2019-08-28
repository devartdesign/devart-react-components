import React from 'react';
export declare enum ToastType {
    SUCCESS = "success",
    WARN = "warning",
    ERROR = "danger",
    INFO = "info"
}
export interface IToastProps {
    title: string;
    description: string;
    type: ToastType;
    onClose: () => void;
}
declare const _default: React.MemoExoticComponent<({ title, description, type, onClose }: IToastProps) => JSX.Element>;
export default _default;
