export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational: boolean = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;

    Error.captureStackTrace(this);
  }
}

// Not found Error

export class NotfoundError extends AppError {
  constructor(message = "Resourcess not found") {
    super(message, 404);
  }
}

// Validation Error using in any form or some thing similarly
export class ValidationError extends AppError {
  constructor(message = "Invalid Request data", details?: any) {
    super(message, 400, true, details);
  }
}

// Authentication Error

export class AuthError extends AppError {
  constructor(message = "Unautharizes") {
    super(message, 401);
  }
}


// forbidden Error

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden access") {
    super(message, 403);
  }
}
// Database Error

export class DatabaseError extends AppError {
  constructor(message = "Database error occurred", details?: any) {
    super(message, 500, false, details);
  }
}

// Rate limiting Error 

export class RateLimitError extends AppError {
  constructor(message = "Too many requests Please try again later") {
    super(message, 429);
  }
}