export interface HttpResponse {
  success: boolean
  statusCode: number
  data?: any
  error?: ErrorResponse
}

export interface ErrorResponse {
  type: string
  message: string
  errors?: string[]
}
