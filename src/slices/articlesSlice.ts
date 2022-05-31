import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { ArticleType, Category, InitialArticleState, SetArticlePayload, SortType } from 'src/types';
import moment from 'moment';
import 'moment/locale/nb';

const initialState: InitialArticleState = {
    articles: [],
    activeFilters: [],
    sort: undefined,
};

const sortArticle = (sort: SortType, articles: ArticleType[]) =>
    articles.sort((article1, article2) => {
        if (sort === 'asc') return article1.date - article2.date;
        if (sort === 'desc') return article2.date - article1.date;
        return 0;
    });

export const articleSlices = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticle: (state, action: PayloadAction<SetArticlePayload>) => {
            const articlesFromPayload: ArticleType[] = action.payload.articles.map((article) => ({
                ...article,
                image: article.image,
                date: moment.utc(article.date, 'DD. MMM. YYYY', 'nb').valueOf(),
            }));

            state.activeFilters = [...state.activeFilters, action.payload.category];

            const newArticlesState = [...state.articles, ...articlesFromPayload];
            if (state.sort) state.articles = sortArticle(state.sort, newArticlesState);
            else state.articles = newArticlesState;
        },

        removeArticleByCategory: (state, action: PayloadAction<Category>) => {
            state.articles = state.articles.filter((article) => article.category !== action.payload);
            state.activeFilters = state.activeFilters.filter((category) => category !== action.payload);
        },

        sortArticles: (state, action: PayloadAction<SortType>) => {
            state.sort = action.payload;
            state.articles = sortArticle(action.payload, state.articles);
        },
    },
});

export const { setArticle, removeArticleByCategory, sortArticles } = articleSlices.actions;

export const selectArticles = (state: RootState) => state.articles;

export default articleSlices.reducer;
