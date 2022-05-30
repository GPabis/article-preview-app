import { Box } from '@mui/material';
import Article from 'src/components/Article/Article';
import NoArticles from 'src/components/Article/NoArticles';
import { selectArticles } from 'src/slices/articlesSlice';
import { useAppSelector } from 'src/store/hooks';

const Articles: React.FC = () => {
    const { articles } = useAppSelector(selectArticles);

    const articlesComponents = articles.map((article) => <Article key={article.id} {...article} />);

    return <Box>{articlesComponents.length ? articlesComponents : <NoArticles />}</Box>;
};

export default Articles;
