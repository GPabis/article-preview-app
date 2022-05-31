import React, { createContext, useCallback, useMemo, useState } from 'react';
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

    const showError = useCallback((msg: string) => {
        setOpen(true);
        setMessage(msg);
    }, []);

    const closeError = useCallback(() => {
        setOpen(false);
        setMessage('');
    }, []);

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
