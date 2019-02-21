import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nestedjson',
  templateUrl: './nestedjson.component.html',
  styleUrls: ['./nestedjson.component.css']
})
export class NestedjsonComponent{

  
  myarray =  {
    "name":"Seshgeri.Mandava",
    "age":21,
    "cars": [
        { "name":"Routing", "models":[ "Parameterized", "url", "href" ] },
        { "name":"Forms", "models":[ "validations", "form submittion", "form directives" ] },
        { "name":"Json", "models":[ "normal", "nested" ] }
    ]
 };
  
  constructor(private httpService: HttpClient) { 
    
   console.log(this.emp.Destinations[0].AS2.FileName);
   console.log(this.emp.OverrideASID);
   console.log(this.emp.Contacts[0].Email);
   console.log(this.emp.Contacts[1].GivenName);
  }
   emp={
    "PartnerName":"JBHProf",
   "BusinessIDs":["zz123","zz345"],
   "ProcessingPolicy":"None",
   "ResponseType":"SOAP",
   "Comments":"Partner Comments",
   "Destinations":[{
     "AS2":{
       "FileName":"PATCertificate.pem",
       "FileContent":"Q2VydGlmaWNhdGU=",
       "DestName":"DestName",
       "DestURL":"17.127.124:9080",
       "ASEncrypt":"on",
       "ASMDNRequest":"off",
       "ASMDNRequestSigned":"off",
       "Retransmit":"on",
       "ASMDNRequestSignedAlgs":"",
       "EnableX12":"on",
       "EnableEDIFACT":"off",
       "EnableXML":"off",
       "EnableBinary":"off"
       }
      }],
      "OverrideASID":"asd",
      "ASAllowDuplicateMessage":"Always",
      "ASSendUnsigned":"off",
      "MaxResends":3,
      "Contacts":[
        {"GivenName":"Bhanu",
          "Title":"Developer",
          "Phone":"8374527586",
          "Email":"bhanu@gmail.com",
          "FamilyName":"Amazon"
          },
          {
            "GivenName":"Vijay",
            "Title":"Tester",
            "Phone":"56236589",
            "Email":"vijay@gmail.com",
            "FamilyName":"Amazon"
          }
      ]
    
  }
  
  
    
}
