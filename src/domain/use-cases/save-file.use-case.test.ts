import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => { 

    const customOptions = {
        fileContent:'custom content',
        fileDestination:'custom-outputs/file-destination',
        fileName:'custom-table-name',
    }
    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
    
    /* afterEach( () => {
        const outputFolderExists = fs.existsSync('outputs');
        if( outputFolderExists ) fs.rmSync('outputs', {recursive:true});
        
        const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
        if( customOutputFolderExists ) fs.rmSync(customOptions.fileDestination, {recursive:true});
    });
     */
    test('should hace file with default values', () => { 
        const saveFile = new SaveFile();
        const filePath = 'outputs/tabla.txt';
        const options = {
            fileContent:'test content'
        }

        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'})
        
        expect(result).toBe(true);
        expect(fileContent).toBe(options.fileContent);
        expect(checkFile).toBeTruthy();
     });

    test('should hace file with custom values', () => { 
        const saveFile = new SaveFile();

        const result = saveFile.execute(customOptions);
        console.log({result});
        const checkFile = fs.existsSync(customFilePath)
        console.log({checkFile});
        const fileContent = fs.readFileSync(customFilePath, {encoding: 'utf-8'})
        
        expect(result).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
        expect(checkFile).toBeTruthy();
     });

     test('should return false if directory couldn´t be created', () => { 
        
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdir').mockImplementation(
            () => { throw new Error('error') }
        );

        const result = saveFile.execute(customOptions);
        expect(result).toBe(false);
      });
     
      test('should return false if file couldn´t be created', () => { 
        
        const saveFile = new SaveFile();
        /* const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('error') }
        ); */

        const result = saveFile.execute({fileContent: 'Hola'});
        expect(result).toBe(true);
      });

 });