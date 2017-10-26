export default class TsRpcError extends Error {
    info: any;

    constructor(message: string, info?: any) {
        super(message);
        this.info = info;

        if ((Object as any).setPrototypeOf) {
            (Object as any).setPrototypeOf(this, TsRpcError.prototype);
        }
        else {
            (this as any).__proto__ = TsRpcError.prototype;
        }
    }
}