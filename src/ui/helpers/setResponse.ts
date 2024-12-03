import { Response } from "express"
import { HttpResponse } from "./http"
import ValidationError from "../../shared/errors/ValidationError"

export function setResponse (res: Response, status: number, data: any): Response {
  return res.status(status).json({ success: true, status, data })
}

function errorResponse (res: Response, error: Error): Response {
  const status = getStatus(error.name)
  let errorResponse: HttpResponse
  let message = error.message
  let errors: string[] | undefined
  if (error instanceof ValidationError && error.errors) {
    errors = error.errors
    message = `${errors?.length} problema(s) encontrado(s)`
  }

  errorResponse = {
    statusCode: status,
    success: false,
    error: {
      type: error.name,
      message,
      errors: errors || undefined
    }
  }

  return res.status(errorResponse.statusCode).json(errorResponse)
}

function getStatus (errorName: string): number {
  switch (errorName) {
    case 'UnauthorizedError':
      return 401

    case 'ForbiddenError':
      return 403

    case 'NotFoundError':
    case 'ValidationError':
    case 'UseCaseError':
    case 'ServiceError':
      return 400

    case 'NotAcceptableError':
      return 406

    default:
      return 500
  }
}

export default errorResponse
