// This file is auto-generated by @hey-api/openapi-ts

export const CreateProductOrderRequestSchema = {
    properties: {
        ids: {
            items: {
                type: "integer",
            },
            type: "array",
            title: "Ids",
        },
    },
    type: "object",
    required: ["ids"],
    title: "CreateProductOrderRequest",
} as const;

export const DownloadProductOrderRequestSchema = {
    properties: {
        id: {
            type: "integer",
            title: "Id",
        },
    },
    type: "object",
    required: ["id"],
    title: "DownloadProductOrderRequest",
} as const;

export const EmployeeSchema = {
    properties: {
        username: {
            type: "string",
            title: "Username",
        },
        id: {
            type: "integer",
            title: "Id",
        },
    },
    type: "object",
    required: ["username", "id"],
    title: "Employee",
} as const;

export const EmployeeListSchema = {
    properties: {
        employees: {
            items: {
                $ref: "#/components/schemas/Employee",
            },
            type: "array",
            title: "Employees",
        },
    },
    type: "object",
    required: ["employees"],
    title: "EmployeeList",
} as const;

export const FileResponseSchema = {
    properties: {
        file: {
            type: "string",
            title: "File",
        },
        fileName: {
            type: "string",
            title: "Filename",
        },
        fileType: {
            type: "string",
            title: "Filetype",
        },
    },
    type: "object",
    required: ["file", "fileName", "fileType"],
    title: "FileResponse",
} as const;

export const FinishProductRequestSchema = {
    properties: {
        id: {
            type: "integer",
            title: "Id",
        },
    },
    type: "object",
    required: ["id"],
    title: "FinishProductRequest",
} as const;

export const HTTPValidationErrorSchema = {
    properties: {
        detail: {
            items: {
                $ref: "#/components/schemas/ValidationError",
            },
            type: "array",
            title: "Detail",
        },
    },
    type: "object",
    title: "HTTPValidationError",
} as const;

export const LoginResponseSchema = {
    properties: {
        permission: {
            type: "integer",
            title: "Permission",
        },
        name: {
            type: "string",
            title: "Name",
        },
        ok: {
            type: "boolean",
            title: "Ok",
            default: false,
        },
    },
    type: "object",
    required: ["permission", "name"],
    title: "LoginResponse",
} as const;

export const OkResponseSchemaSchema = {
    properties: {
        ok: {
            type: "boolean",
            title: "Ok",
        },
        message: {
            type: "string",
            title: "Message",
            default: "",
        },
    },
    type: "object",
    required: ["ok"],
    title: "OkResponseSchema",
} as const;

export const PaginationRequestSchema = {
    properties: {
        page: {
            type: "integer",
            title: "Page",
        },
        perPage: {
            type: "integer",
            title: "Perpage",
        },
    },
    type: "object",
    required: ["page", "perPage"],
    title: "PaginationRequest",
} as const;

export const PaginationResponseSchema = {
    properties: {
        rowCount: {
            type: "integer",
            title: "Rowcount",
        },
    },
    type: "object",
    required: ["rowCount"],
    title: "PaginationResponse",
} as const;

export const ProductEditRequestSchema = {
    properties: {
        name: {
            type: "string",
            title: "Name",
        },
        description: {
            type: "string",
            title: "Description",
        },
        price: {
            type: "number",
            title: "Price",
        },
        article: {
            type: "string",
            title: "Article",
        },
        quantity: {
            type: "integer",
            title: "Quantity",
        },
    },
    type: "object",
    required: ["name", "description", "price", "article", "quantity"],
    title: "ProductEditRequest",
} as const;

export const ProductItemSchema = {
    properties: {
        id: {
            type: "integer",
            title: "Id",
        },
        name: {
            type: "string",
            title: "Name",
        },
        description: {
            type: "string",
            title: "Description",
        },
        price: {
            type: "number",
            title: "Price",
        },
        article: {
            type: "string",
            title: "Article",
        },
        quantity: {
            type: "integer",
            title: "Quantity",
        },
    },
    type: "object",
    required: ["id", "name", "description", "price", "article", "quantity"],
    title: "ProductItem",
} as const;

export const ProductListSchema = {
    properties: {
        products: {
            items: {
                $ref: "#/components/schemas/ProductItem",
            },
            type: "array",
            title: "Products",
        },
        paginationInfo: {
            $ref: "#/components/schemas/PaginationResponse",
        },
    },
    type: "object",
    required: ["products", "paginationInfo"],
    title: "ProductList",
} as const;

export const ProductListFilterSchema = {
    properties: {
        keyword: {
            type: "string",
            title: "Keyword",
            default: "",
        },
        pagination: {
            $ref: "#/components/schemas/PaginationRequest",
        },
    },
    type: "object",
    required: ["pagination"],
    title: "ProductListFilter",
} as const;

export const ProductOrderItemSchema = {
    properties: {
        id: {
            type: "integer",
            title: "Id",
        },
        date: {
            type: "string",
            format: "date-time",
            title: "Date",
        },
        username: {
            type: "string",
            title: "Username",
        },
        income: {
            type: "number",
            title: "Income",
        },
        price: {
            type: "number",
            title: "Price",
        },
        finished: {
            type: "boolean",
            title: "Finished",
        },
    },
    type: "object",
    required: ["id", "date", "username", "income", "price", "finished"],
    title: "ProductOrderItem",
} as const;

export const ProductOrderResponseSchema = {
    properties: {
        items: {
            items: {
                $ref: "#/components/schemas/ProductOrderItem",
            },
            type: "array",
            title: "Items",
        },
        paginationInfo: {
            $ref: "#/components/schemas/PaginationResponse",
        },
    },
    type: "object",
    required: ["items", "paginationInfo"],
    title: "ProductOrderResponse",
} as const;

export const ProductOrdersRequestSchema = {
    properties: {
        keyword: {
            type: "string",
            title: "Keyword",
            default: "",
        },
        pagination: {
            $ref: "#/components/schemas/PaginationRequest",
        },
    },
    type: "object",
    required: ["pagination"],
    title: "ProductOrdersRequest",
} as const;

export const SalesItemSchema = {
    properties: {
        id: {
            type: "integer",
            title: "Id",
        },
        productName: {
            type: "string",
            title: "Productname",
        },
        price: {
            type: "number",
            title: "Price",
        },
        quantity: {
            type: "integer",
            title: "Quantity",
        },
        income: {
            type: "number",
            title: "Income",
        },
    },
    type: "object",
    required: ["id", "productName", "price", "quantity", "income"],
    title: "SalesItem",
} as const;

export const SalesRequestSchema = {
    properties: {
        article: {
            type: "string",
            title: "Article",
        },
        quantity: {
            type: "integer",
            title: "Quantity",
        },
        price: {
            type: "number",
            title: "Price",
        },
        userId: {
            type: "integer",
            title: "Userid",
        },
        income: {
            type: "number",
            title: "Income",
        },
    },
    type: "object",
    required: ["article", "quantity", "price", "userId", "income"],
    title: "SalesRequest",
} as const;

export const SalesUserResponseSchema = {
    properties: {
        items: {
            items: {
                $ref: "#/components/schemas/SalesItem",
            },
            type: "array",
            title: "Items",
        },
    },
    type: "object",
    required: ["items"],
    title: "SalesUserResponse",
} as const;

export const UserDataRequestSchema = {
    properties: {
        username: {
            type: "string",
            title: "Username",
        },
        password: {
            type: "string",
            title: "Password",
        },
        permission: {
            type: "integer",
            title: "Permission",
        },
    },
    type: "object",
    required: ["username", "password", "permission"],
    title: "UserDataRequest",
} as const;

export const UserListSchema = {
    properties: {
        users: {
            items: {
                $ref: "#/components/schemas/UserDataRequest",
            },
            type: "array",
            title: "Users",
        },
        paginationInfo: {
            $ref: "#/components/schemas/PaginationResponse",
        },
    },
    type: "object",
    required: ["users", "paginationInfo"],
    title: "UserList",
} as const;

export const UserListFilterSchema = {
    properties: {
        keyword: {
            type: "string",
            title: "Keyword",
            default: "",
        },
        permission: {
            anyOf: [
                {
                    type: "integer",
                },
                {
                    type: "null",
                },
            ],
            title: "Permission",
        },
        pagination: {
            $ref: "#/components/schemas/PaginationRequest",
        },
    },
    type: "object",
    required: ["pagination"],
    title: "UserListFilter",
} as const;

export const UserLoginSchema = {
    properties: {
        username: {
            type: "string",
            title: "Username",
        },
        password: {
            type: "string",
            title: "Password",
        },
    },
    type: "object",
    required: ["username", "password"],
    title: "UserLogin",
} as const;

export const ValidationErrorSchema = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: "string",
                    },
                    {
                        type: "integer",
                    },
                ],
            },
            type: "array",
            title: "Location",
        },
        msg: {
            type: "string",
            title: "Message",
        },
        type: {
            type: "string",
            title: "Error Type",
        },
    },
    type: "object",
    required: ["loc", "msg", "type"],
    title: "ValidationError",
} as const;
