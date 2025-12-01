/**
 * Generic API error response
 */
export interface ApiError {
  message: string;
  statusCode?: number;
}

/**
 * API configuration
 */
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}
