//==============================================================================
// TYPES
//==============================================================================

export type SortType = 'asc' | 'desc' | undefined;

//==============================================================================
// Enums
//==============================================================================

export enum Category {
    SPORT = 'sport',
    FASHION = 'fashion',
}

export enum APIRoutes {
    SPORT = 'articles/sports',
    FASHION = 'articles/fashion',
}

//==============================================================================
// Items
//==============================================================================

export interface ArticleType {
    id: number;
    date: number;
    image: string;
    category: Category;
    title: string;
    preamble: string;
}

//==============================================================================
// State
//==============================================================================

export interface InitialArticleState {
    articles: ArticleType[];
    activeFilters: Category[];
    sort: SortType;
}

export interface SetArticlePayload {
    articles: ArticleType[];
    category: Category;
}

export interface ErrorContextState {
    open: boolean;
    message: string;
    showError: (message: string) => void;
    closeError: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

export interface LayoutContextState {
    open: boolean;
    sidebarWidth: number;
    openSidebarHandler: () => void;
    closeSidebarHandler: () => void;
}

export interface SortingState {
    sortDesc: () => void;
    sortAsc: () => void;
}

//==============================================================================
// API
//==============================================================================

export interface ApiResponse {
    articles: ArticleType[] | undefined;
    message: string | undefined;
}
