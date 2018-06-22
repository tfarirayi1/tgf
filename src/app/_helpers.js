import { Auth } from 'aws-amplify';
import { GraphQLClient } from 'graphql-request';
//enter salon
//view menu, hairdresser calendar or general calendar
export function f1(a,b,c){
    //property-builder
    const _context=a;
    const propertyName=b;
    const defaultValue=c;
    const history=window.history;
        return history.state ? ( history.state[_context] ? history.state[_context][propertyName] || defaultValue : defaultValue ) : defaultValue;
}
export function f2(a){
    const query=a;
    const client=new GraphQLClient('http://localhost:3333/',{mode:'cors'});
    client.request(query).then((response)=>{
        return console.log(response);
    });
}
export function configureAuth(){
    //configure-amazon-cognito-details
    Auth.configure({
        identityPoolId:'eu-west-1:25388842-fe3f-47da-b371-8523843a6018',
        userPoolId:'eu-west-1_CTOnEIecG',
        userPoolWebClientId:'1f39eiq38scgarj4l6hdnmlqct',
        mandatorySignIn:true,
    });
}