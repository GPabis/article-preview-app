import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { Article, Category, InitialArticleState, SetArticlePayload } from 'src/types';
import noImage from '../resources/noImage.jpg';

const initialState: InitialArticleState = {
    articles: [],
    activeFilters: [],
};

export const articleSlices = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticle: (state, action: PayloadAction<SetArticlePayload>) => {
            const articlesFromPayload: Article[] = action.payload.articles.map((article) => ({
                ...article,
                image: article.image || noImage,
                date: new Date(article.date),
            }));
            state.activeFilters = [...state.activeFilters, action.payload.category];
            state.articles = [...state.articles, ...articlesFromPayload];
        },

        removeArticleByCategory: (state, action: PayloadAction<Category>) => {
            state.articles = state.articles.filter((article) => article.category !== action.payload);
            state.activeFilters = state.activeFilters.filter((category) => category !== action.payload);
        },
    },
});

export const { setArticle, removeArticleByCategory } = articleSlices.actions;

export const selectArticles = (state: RootState) => state.articles;

export default articleSlices.reducer;
