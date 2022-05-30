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

export interface Article {
    id: number;
    date: Date;
    image: string;
    category: Category;
    title: string;
    preamble: string;
}

//==============================================================================
// State
//==============================================================================

export interface InitialArticleState {
    articles: Article[];
    activeFilters: Category[];
}

export interface SetArticlePayload {
    articles: Article[];
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

//==============================================================================
// API
//==============================================================================

export interface ApiResponse {
    articles: Article[] | undefined;
    message: string | undefined;
}
