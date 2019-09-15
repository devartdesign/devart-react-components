import React from 'react';
export interface IChipProps {
    label: string;
    icon: any;
    className?: string;
    onClick: () => void;
}
declare const _default: React.MemoExoticComponent<({ onClick, label, icon, className }: IChipProps) => JSX.Element>;
export default _default;
