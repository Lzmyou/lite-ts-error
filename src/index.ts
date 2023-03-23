import { ErrorCode } from './code';
import { CustomError } from './custom';

export { ErrorCode, CustomError };
globalThis['lite-ts-error'] = { CustomError, ErrorCode };