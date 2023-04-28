export declare class Environment {
    private static instance;
    private static debug;
    constructor();
    static setDebugMode(debug: boolean): void;
    static getInstance(): Environment;
    isDebugMode(): boolean;
}
