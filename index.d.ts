import TsrpcPtl from './src/TsrpcPtl';
import TsrpcError from './src/TsrpcError';
import TsrpcReq from './src/TsrpcReq';
import TsrpcRes from './src/TsrpcRes';
import ITsrpcClient from './src/ITsrpcClient';
export { TsrpcPtl, TsrpcError, TsrpcReq, TsrpcRes, ITsrpcClient };
export default TsrpcPtl;

declare global {
    var __filename: string;
}