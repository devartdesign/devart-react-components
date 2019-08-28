import React, { CSSProperties } from 'react';
export interface IColProps {
    className?: string;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    style?: CSSProperties;
}
declare const _default: React.MemoExoticComponent<({ children, className, size, style }: React.PropsWithChildren<IColProps>) => JSX.Element>;
export default _default;
