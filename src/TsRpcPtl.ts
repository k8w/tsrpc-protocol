export default class TsrpcPtl<Req, Res> {
    req!: Req;
    res!: Res;
    
    readonly name: string;
    readonly filename: string;
    readonly conf: PtlConf;

    /**
     * 
     * @param filename Protocol file path, always assign `__filename` to it.
     * @param conf Custom protocol config, processed them later by yourself.
     */
    constructor(filename: string, conf: PtlConf = {}) {
        this.filename = filename;

        let nameMatch = filename.match(/Ptl(\w+)\.[jt]s/);
        if (!nameMatch) {
            throw new Error('Invalid protocol filename, must with prefix `Ptl`')
        }
        this.name = nameMatch[1];
        
        this.conf = conf;
    }
}

export type PtlConf = { [key: string]: any };