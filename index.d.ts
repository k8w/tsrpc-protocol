import TsRpcPtl from './src/TsRpcPtl';
import TsRpcError from './src/TsRpcError';
import TsRpcReq from './src/TsRpcReq';
import TsRpcRes from './src/TsRpcRes';
import ITsRpcClient from './src/ITsRpcClient';
export { TsRpcPtl, TsRpcError, TsRpcReq, TsRpcRes, ITsRpcClient };
export default TsRpcPtl;

declare global {
    var __filename: string;
}