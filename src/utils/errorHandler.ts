import { AxiosError } from "axios";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

interface ApiErrorResponse {
  success: boolean;
  message: string;
  data: Record<string, unknown>;
  error: string;
}

type ErrorCategory =
  | "validation"
  | "auth"
  | "conflict"
  | "server"
  | "client"
  | "unknown";

const extractErrorDetails = (
  error: AxiosError<ApiErrorResponse>
): {
  message: string;
  category: ErrorCategory;
} => {
  const responseData = error.response?.data;
  const status = error.response?.status;
  const defaultMessage = "An unexpected error occurred";

  const errorMessage =
    responseData?.error ||
    responseData?.message ||
    error.message ||
    defaultMessage;

  // Determine error category based on status code
  let category: ErrorCategory = "unknown";
  if (status) {
    if (status === StatusCodes.UNPROCESSABLE_ENTITY) category = "validation";
    else if ([StatusCodes.UNAUTHORIZED, StatusCodes.FORBIDDEN].includes(status))
      category = "auth";
    else if (status === StatusCodes.CONFLICT) category = "conflict";
    else if (status >= StatusCodes.INTERNAL_SERVER_ERROR) category = "server";
    else if (status >= StatusCodes.BAD_REQUEST) category = "client";
  }

  return { message: errorMessage, category };
};

const handleConflictError = (message: string): string => {
  if (message.toLowerCase().includes("unique constraint")) {
    const field = message.split(":")[1]?.trim() || "field";
    return `This ${field} is already in use. Please try another.`;
  }
  return `Conflict: ${message}`;
};

export const handleApiError = (
  error: unknown,
  defaultMessage: string = ReasonPhrases.INTERNAL_SERVER_ERROR
): never => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const { message, category } = extractErrorDetails(error);

    switch (status) {
      case StatusCodes.BAD_REQUEST:
        throw new Error(`${ReasonPhrases.BAD_REQUEST}: ${message}`);

      case StatusCodes.UNAUTHORIZED:
        throw new Error(`${ReasonPhrases.UNAUTHORIZED}: ${message}`);

      case StatusCodes.FORBIDDEN:
        throw new Error(`${ReasonPhrases.FORBIDDEN}: ${message}`);

      case StatusCodes.NOT_FOUND:
        throw new Error(`${ReasonPhrases.NOT_FOUND}: ${message}`);

      case StatusCodes.CONFLICT:
        throw new Error(handleConflictError(message));

      case StatusCodes.UNPROCESSABLE_ENTITY:
        throw new Error(`${ReasonPhrases.UNPROCESSABLE_ENTITY}: ${message}`);

      case StatusCodes.TOO_MANY_REQUESTS:
        throw new Error(
          `${ReasonPhrases.TOO_MANY_REQUESTS}: Rate limit exceeded`
        );

      case StatusCodes.INTERNAL_SERVER_ERROR:
        throw new Error(`${ReasonPhrases.INTERNAL_SERVER_ERROR}: ${message}`);

      case StatusCodes.BAD_GATEWAY:
        throw new Error(`${ReasonPhrases.BAD_GATEWAY}: ${message}`);

      case StatusCodes.SERVICE_UNAVAILABLE:
        throw new Error(`${ReasonPhrases.SERVICE_UNAVAILABLE}: ${message}`);

      case StatusCodes.GATEWAY_TIMEOUT:
        throw new Error(`${ReasonPhrases.GATEWAY_TIMEOUT}: ${message}`);

      default:
        if (category === "server") {
          throw new Error(`Server Error: ${message}`);
        }
        if (category === "client") {
          throw new Error(`Client Error: ${message}`);
        }
        throw new Error(message);
    }
  }

  // Enhanced non-Axios error handling
  if (error instanceof TypeError) {
    throw new Error(`Type Error: ${error.message}`);
  }

  if (error instanceof Error) {
    throw new Error(error.message);
  }

  throw new Error(defaultMessage);
};
