import {ConnectionSuccessfulPayload, ConnectPayload} from './types';
import {POWERISE_DEV_DOMAIN, POWERISE_DOMAIN} from '../../config/powerise';
import {Environment} from '../../config/environment';

/**
 * Gets the item at the specified index of an array
 *
 * @since v0.1.0
 * @category auth
 * @param {ConnectPayload} payload
 * @returns {Promise<ConnectionSuccessfulPayload>}
 */
export const connect = (payload: ConnectPayload): Promise<ConnectionSuccessfulPayload> => {
    const popupConfig = {
        width: 400,
        height: 400,
    }
    const url = `${Environment.getInstance().isDebugMode() ? POWERISE_DEV_DOMAIN : POWERISE_DOMAIN}/connect?payload=${btoa(JSON.stringify(payload))}`

    return new Promise((resolve, reject) => {
        try {
            const popup = window.open(url, 'Popup', `width=${popupConfig.width},height=${popupConfig.height},top=${(screen.height/2)-(popupConfig.height/2)},left=${(screen.width/2)-(popupConfig.width/2)}`);

            window.addEventListener('message', function(event) {
                if (event.source === popup) {
                    resolve(event.data);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}