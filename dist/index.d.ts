export declare function greet(person: MyInterface): string;
import { MyInterface } from "./interface/app";
export declare class MongoSchema {
    private mongoose;
    constructor(mongoose: any);
    get userSchema(): any;
}
