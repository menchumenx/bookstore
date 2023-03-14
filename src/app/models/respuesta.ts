import { Book } from "./book";



export class Respuesta {
   
    constructor(
        public error: boolean,
        public code: number,
        public message : string,
        public data : Book[]
    ){}
}
