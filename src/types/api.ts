export interface ApiError {
  message: string;
  statusCode?: number;
}

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}
