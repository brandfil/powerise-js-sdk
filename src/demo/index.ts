import {connect, Environment} from "../lib";
import {ShopPlatform} from '../lib/types';

Environment.setDebugMode(true);
connect({
    platform: ShopPlatform.PrestaShop,
    shopUrl: ""
});