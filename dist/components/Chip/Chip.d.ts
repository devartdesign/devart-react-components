import React from 'react';
export interface IChipProps {
    label: string;
    icon: any;
    key?: string;
    onClick: () => void;
}
declare const _default: React.MemoExoticComponent<({ onClick, label, key, icon }: IChipProps) => JSX.Element>;
export default _default;
