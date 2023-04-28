import { ConnectionSuccessfulPayload, ConnectPayload } from './types';
/**
 * Gets the item at the specified index of an array
 *
 * @since v0.1.0
 * @category auth
 * @param {ConnectPayload} payload
 * @returns {Promise<ConnectionSuccessfulPayload>}
 */
export declare const connect: (payload: ConnectPayload) => Promise<ConnectionSuccessfulPayload>;
