export interface customError extends Error {
  customCode?: Number
}

export interface ExtendedPostgrestError extends Error {
  statusCode?: Number
}
