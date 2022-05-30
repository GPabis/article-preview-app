import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { ArticleType } from 'src/types';

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;

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
    font-size: 24px;

    @media (min-width: 996px) {
        font-size: 37px;
    }
`;

const Article: React.FC<ArticleType> = ({ date, image, title, preamble }) => {
    return (
        <ArticleContainer>
            {image && (
                <ImageContainer>
                    <Image src={image} alt={title} />
                </ImageContainer>
            )}
            <Box sx={{ padding: '10px', width: '100%' }}>
                <Title variant="h4">{title}</Title>
                <Typography paragraph sx={{ minWidth: '100px', fontSize: '13px' }}>
                    Date: {new Date(date).toISOString().substring(0, 10)}
                </Typography>

                <Typography paragraph sx={{ fontSize: '19px' }}>
                    {preamble}
                </Typography>
            </Box>
        </ArticleContainer>
    );
};

export default Article;
