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
// State
//==============================================================================

export interface ArticleState {
    id: number;
    date: Date;
    image: string;
    category: Category;
    title: string;
    preamble: string;
}

export interface ApiResponse {
    articles: ArticleState[] | undefined;
    message: string | undefined;
}

export interface InitialArticleState {
    articles: ArticleState[];
    activeFilters: Category[];
}

export interface SetArticlePayload {
    articles: ArticleState[];
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
