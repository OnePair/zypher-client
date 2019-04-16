export declare class ZypherWallet {
    private apiHost;
    constructor(host: string);
    getAddress(protocol: string, password: string): Promise<object>;
    getInfo(protocol: string): Promise<object>;
    getPublicKeys(protocol: string, password: string): Promise<object>;
    getSeedPhrase(protocol: string, password: string): Promise<object>;
    recoverFromSeedPhrase(protocol: string, password: string, phrase: string): Promise<object>;
    private getApiUrl;
}
