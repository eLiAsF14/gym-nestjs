import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
    private readonly envConfig: { [key: string]:string }
    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== "production";

        if(isDevelopmentEnv){
            const envFilePAth = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envFilePAth);

            if(!existsPath){
                console.log('.env file does not exist');
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePAth));
        }else {
            this.envConfig = {
                PORT: process.env.PORT,
            };
        }
    }

    get(key: string) : string {
        return this.envConfig[key];
    }
}