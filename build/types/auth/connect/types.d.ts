import { ShopPlatform } from '../../types';
export type ConnectPayload = {
    platform: ShopPlatform;
    shopUrl: string;
    ref: string;
};
export type ConnectionSuccessfulPayload = {
    ssoUID: string;
    apiKey: string;
};
