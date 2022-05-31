import { Snackbar, Alert } from '@mui/material';
import { useContext } from 'react';
import ErrorContext from 'src/context/ErrorContext';

const ErrorNotyfication: React.FC = () => {
    const { message, open, closeError } = useContext(ErrorContext);

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={closeError} message={message}>
                <Alert severity="error">{message}</Alert>
            </Snackbar>
        </div>
    );
};

export default ErrorNotyfication;
