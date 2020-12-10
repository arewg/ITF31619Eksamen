/**
 * errorHandler.js er hentet direkte fra Marius Wallins' leksjon 13
 */
export default class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  };