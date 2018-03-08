import SuperPromise from 'k8w-super-promise';
import TsrpcPtl from './TsrpcPtl';

export default interface ITsrpcClient {
    callApi<Req, Res>(ptl: TsrpcPtl<Req, Res>, req?: Req): SuperPromise<Res>;
}