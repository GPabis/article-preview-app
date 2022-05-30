import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { ArticleState } from 'src/types';

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 100%;

    @media (min-width: 996px) {
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    object-fit: cover;
    text-align: center;
    height: 300px;
    width: 300px;
`;

const Title = styled(Typography)`
    font-size: 20px;

    @media (min-width: 996px) {
        font-size: 27px;
    }
`;

const Article: React.FC<ArticleState> = ({ date, image, title, preamble }) => {
    return (
        <ArticleContainer>
            <ImageContainer>
                <Image src={image} alt={title} />
            </ImageContainer>
            <Box sx={{ padding: '10px', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Title variant="h4">{title}</Title>
                    {!isNaN(Date.parse(date.toString())) && (
                        <Typography paragraph sx={{ minWidth: '60px' }}>
                            {date.toISOString().substring(0, 10)}
                        </Typography>
                    )}
                </Box>
                <Typography paragraph>{preamble}</Typography>
            </Box>
        </ArticleContainer>
    );
};

export default Article;
