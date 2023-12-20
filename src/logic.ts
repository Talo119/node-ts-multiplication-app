import { yarg } from "./config/yargs.plugin";

const {b:base, l:limit, show} = yarg

const fs = require('fs')

const message: string = 'Hola Mundo';

const numero: number = 7;

const header: string = 
`==========================================
            Tabla del ${base}
==========================================\n`

let data: string = header;

for (let i = 1; i <= limit; i++) {
    data += `${base} x ${i} =  ${base * i}\n`
}

if (show) console.log(data);

const outPutPath = 'outputs/Folder1';

fs.mkdirSync(outPutPath, {recursive:true});
fs.writeFileSync(`${outPutPath}/tabla-${base}.txt`, data);
