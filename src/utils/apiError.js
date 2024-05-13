/*
 * Title: apiError.js
 * Description : Custom error handler
 * Author: Tanvir Hassan Joy
 * Date: 2024-05-12 21:59:35
 */

class apiError extends Error {
  constructor(statusCode, message = "", errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  toJSON() {
    return {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      errors: this.errors,
    };
  }
}

export default apiError;
