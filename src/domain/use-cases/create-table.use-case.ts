
export interface CreateTableOptions{
    base:number,
    limit?:number
}

export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => string;
}


export class CreateTable implements CreateTableUseCase {
    constructor(
        
    ) {}

    execute({base, limit = 10}: CreateTableOptions){
        let outPutMessage = '';
        for (let i = 1; i <= limit; i++) {
            outPutMessage += `${base} x ${i} =  ${base * i}\n`
        }

        return outPutMessage;
    }
}