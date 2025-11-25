export interface GetAllAPIResponse<T> {
    data: GetAllData<T>;
    statusCode: number;
    success: boolean;
    message: string;
}

export interface GetAllData<T> {
    data: T[];
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}