
  export class Client {
    Name: string;
    Email: string;
    PhoneNumber: string;
    TotalBill:number;
    AgencyId:string
}

export class ClientResponse{
  _id : string;
  statusCode : number;
  data:any;
}