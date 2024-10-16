// This file is auto-generated by @hey-api/openapi-ts

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type LoginResponse = {
    permission: number;
    name: string;
    ok?: boolean;
};

export type OkResponseSchema = {
    ok: boolean;
    message?: string;
};

export type PaginationRequest = {
    page: number;
    perPage: number;
};

export type PaginationResponse = {
    total: number;
    pages: number;
};

export type ProductEditRequest = {
    name: string;
    description: string;
    price: number;
    article: string;
    quantity: number;
};

export type ProductItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    article: string;
    quantity: number;
};

export type ProductList = {
    products: Array<ProductItem>;
    paginationInfo: PaginationResponse;
};

export type ProductListFilter = {
    keyword?: string;
    pagination: PaginationRequest;
};

export type UserLogin = {
    username: string;
    password: string;
};

export type ValidationError = {
    loc: Array<string | number>;
    msg: string;
    type: string;
};

export type LoginUserData = {
    body: UserLogin;
};

export type LoginUserResponse = LoginResponse;

export type LoginUserError = HTTPValidationError;

export type GetProductsListData = {
    body: ProductListFilter;
};

export type GetProductsListResponse = ProductList;

export type GetProductsListError = HTTPValidationError;

export type CreateProductData = {
    body: ProductEditRequest;
};

export type CreateProductResponse = OkResponseSchema;

export type CreateProductError = HTTPValidationError;

export type EditProductData = {
    body: ProductEditRequest;
};

export type EditProductResponse = OkResponseSchema;

export type EditProductError = HTTPValidationError;
