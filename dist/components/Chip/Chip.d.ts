import React from 'react';
export interface IChipProps {
    label: string;
    icon: any;
    key?: string;
    className?: string;
    onClick: () => void;
}
declare const _default: React.MemoExoticComponent<({ onClick, label, key, icon, className }: IChipProps) => JSX.Element>;
export default _default;
