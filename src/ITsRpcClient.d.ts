import SuperPromise from 'k8w-super-promise';
import TsRpcPtl from './TsRpcPtl';

export default interface ITsRpcClient {
    callApi<Req, Res>(ptl: TsRpcPtl<Req, Res>, req?: Req): SuperPromise<Res>;
}