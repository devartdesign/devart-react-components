import React from 'react';
export interface IErrorBoundaryProps {
    Logger: {
        error: (...args: any[]) => void;
    };
    fallback?: React.ReactElement;
}
export interface IErrorBoundaryState {
    hasError: boolean;
}
export default class ErrorBoundary extends React.PureComponent<IErrorBoundaryProps, IErrorBoundaryState> {
    static defaultProps: {
        Logger: any;
        children: any;
        fallback: any;
    };
    state: {
        hasError: boolean;
    };
    static getDerivedStateFromError: (error: Error) => IErrorBoundaryState;
    componentDidCatch(error: any, info: any): void;
    render(): {};
}
