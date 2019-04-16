export declare class ZypherAgent {
    private apiHost;
    constructor(host: string);
    registerDID(protocol: string, password: string): Promise<object>;
    registerName(protocol: string, password: string, name: string): Promise<object>;
    importDID(password: string, did: string): Promise<object>;
    authorizeProcessor(protocol: string, password: string, processorId: string, publicKey: string, auth: boolean, sig: boolean): Promise<object>;
    importProcessor(protocol: string, password: string, processorId: string, processorToken: string, privateKey: string): Promise<object>;
    revokeProcessor(protocol: string, password: string, processorId: string): Promise<object>;
    createJwt(protocol: string, password: string, claims: object, expiresIn: string): Promise<object>;
    verifyJwt(jwt: string, id: string): Promise<object>;
    private getApiUrl;
}
