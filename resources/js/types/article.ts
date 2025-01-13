export type ArticleCategoriesProps = {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    deleted_at: any;
};

export type ArticleProps = {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    slug: string;
    category_id: number;
    created_at: string;
    updated_at: string;
};
