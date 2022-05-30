import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import ErrorContext from 'src/context/ErrorContext';
import { useContext } from 'react';
import { removeArticleByCategory, selectArticles, setArticle } from 'src/slices/articlesSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { ApiResponse, APIRoutes, Category } from 'src/types';

const CategoryFilter: React.FC = () => {
    const dispatch = useAppDispatch();
    const { showError } = useContext(ErrorContext);
    const articles = useAppSelector(selectArticles);

    const getFiltersByCategoryHandler = async (category: Category, route: APIRoutes, checked: boolean) => {
        if (checked) {
            try {
                const response = await fetch(`http://localhost:6010/${route}`);
                const data: ApiResponse = await response.json();

                if (data.message) {
                    const msg =
                        response.status === 404 ? 'Articles Not Found' : 'Internal Server Error, Try again later...';
                    showError(msg);
                    return;
                }

                if (data.articles !== undefined && data.articles.length)
                    dispatch(setArticle({ articles: data.articles, category }));
                else showError('There is no articles with this category');
            } catch (error) {
                showError('Something goes wrong. Try again later');
            }
        } else {
            dispatch(removeArticleByCategory(category));
        }
    };

    const isCategorySelected = (category: Category) =>
        !!articles.activeFilters.find((filter) => filter === category)?.length;

    return (
        <FormControl>
            <FormLabel>Category</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox />}
                    label={Category.SPORT}
                    value={Category.SPORT}
                    checked={isCategorySelected(Category.SPORT)}
                    onChange={(_, checked) => getFiltersByCategoryHandler(Category.SPORT, APIRoutes.SPORT, checked)}
                />
                <FormControlLabel
                    control={<Checkbox />}
                    label={Category.FASHION}
                    value={Category.FASHION}
                    checked={isCategorySelected(Category.FASHION)}
                    onChange={(_, checked) => getFiltersByCategoryHandler(Category.FASHION, APIRoutes.FASHION, checked)}
                />
            </FormGroup>
        </FormControl>
    );
};

export default CategoryFilter;
