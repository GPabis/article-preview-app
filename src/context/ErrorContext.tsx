import React, { createContext, useMemo, useState } from 'react';
import { ErrorContextState } from 'src/types';

const ErrorContext = createContext<ErrorContextState>({
    open: false,
    message: '',
    showError: () => {},
    closeError: () => {},
});

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const showError = (msg: string) => {
        setOpen(true);
        setMessage(msg);
    };

    const closeError = () => {
        setOpen(false);
        setMessage('');
    };

    const value: ErrorContextState = useMemo(
        () => ({
            open,
            message,
            showError,
            closeError,
        }),
        [open],
    );

    return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export default ErrorContext;
