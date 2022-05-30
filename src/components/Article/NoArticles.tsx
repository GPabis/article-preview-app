import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const NoArticlesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
`;

const NoArticlesText = styled(Typography)`
    font-size: 18px;

    @media (min-width: 996px) {
        font-size: 46px;
    }
`;

const NoArticles: React.FC = () => {
    return (
        <NoArticlesContainer>
            <NoArticlesText variant="h3">Please Select Article Filter</NoArticlesText>
        </NoArticlesContainer>
    );
};

export default NoArticles;
