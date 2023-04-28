export class Environment {
    private static instance: Environment;
    private static debug = false;

    constructor() {
        if (Environment.instance) {
            return Environment.instance;
        }
        Environment.instance = this;
    }
    static setDebugMode(debug: boolean): void {
        this.debug = debug;
    }

    static getInstance(): Environment {
        return new Environment();
    }

    isDebugMode(): boolean {
        return Environment.debug;
    }
}