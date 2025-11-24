export interface GetAllResponse<T> {
    data: {
        data: T[];
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        pageNumber: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
    };
    statusCode: number;
    success: boolean;
    message: string;
}