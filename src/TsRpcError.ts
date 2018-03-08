export default class TsrpcError extends Error {
    info: any;

    constructor(message: string, info?: any) {
        super(message);
        this.info = info;

        if ((Object as any).setPrototypeOf) {
            (Object as any).setPrototypeOf(this, TsrpcError.prototype);
        }
        else {
            (this as any).__proto__ = TsrpcError.prototype;
        }
    }
}