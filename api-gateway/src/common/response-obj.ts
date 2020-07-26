import  { HttpStatus } from '@nestjs/common';
import { Response as ExpressResponse  } from 'express';
import { ResponseObject as IResponse } from '../interfaces/response.interface'
export class  Response {
    private responseObj 
    private resp

    constructor( responseobj : IResponse , res : ExpressResponse  ){
        this.responseObj = responseobj;
        this.resp = res;
     
    }
    send() {
        let responseOut = { 'statusCode' : this.responseObj.statusCode ,'data': this.responseObj.data  , 'message' : this.responseObj.message}
        switch(this.responseObj.statusCode){
            case 201:
                this.resp.status(HttpStatus.CREATED).send(responseOut);
                break;
            case 200:
                this.resp.status(HttpStatus.OK).send(responseOut);
                break;
            case 404:
                this.resp.status(HttpStatus.NOT_FOUND).send(responseOut);
                break;
            default:
                 this.resp.status(HttpStatus.INTERNAL_SERVER_ERROR).send(responseOut);    


        }
    }
}