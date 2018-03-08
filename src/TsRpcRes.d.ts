export default interface TsrpcRes {
    /**
     * Error message (if error), is `undefined` when success
     */
    errmsg?: string;

    /**
     * Extra error info
     */
    errinfo?: any;
}