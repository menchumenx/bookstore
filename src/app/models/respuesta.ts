import { Book } from "./book";
import { User } from "./user";



export class Respuesta {
   
    constructor(
        public error: boolean,
        public code: number,
        public message : string,
        public data : Book[],
        public result: User[],
        public info?:any
    ){}
}
