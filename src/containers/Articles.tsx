import { Box, Divider } from '@mui/material';
import Article from 'src/components/Article/Article';
import NoArticles from 'src/components/Article/NoArticles';
import Sorting from 'src/components/Article/Sorting';
import { selectArticles, sortArticles } from 'src/slices/articlesSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

const Articles: React.FC = () => {
    const { articles } = useAppSelector(selectArticles);
    const dispatch = useAppDispatch();

    const articlesComponents = articles.map((article) => (
        <Box key={article.id}>
            <Divider />
            <Article {...article} />
        </Box>
    ));

    return (
        <>
            <Box>
                {articlesComponents.length ? (
                    <>
                        <Sorting
                            sortAsc={() => dispatch(sortArticles('asc'))}
                            sortDesc={() => dispatch(sortArticles('desc'))}
                        />
                        {articlesComponents}
                    </>
                ) : (
                    <NoArticles />
                )}
            </Box>
            ;
        </>
    );
};

export default Articles;
