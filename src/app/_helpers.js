import { GraphQLClient } from 'graphql-request';
class Project{
    constructor(a){
        this.id='001';
        this.type=a;
    }
}
class Server{
    constructor(a,b,c,d,e){
        this.provider=a;
        this.type=b;
        this.owner=c;

        this.id=Date.now();

        this.cpu=d;
        this.mem=e;
    }
}
class Artefact{
    constructor(){
        this.name='';
        this.type='';
    }
}
class Salon{
    constructor(){
        this.name;
        this.dressers//dresser
        this.hairdos//hairdo
        this.appointments//booking
    }
}
class Dresser{
    constructor(){
        this.id;
        this.type;
        this.bookings;//reference
    }
}
class Hairdo{
    constructor(){
        this.name;
        this.description;
        this.duration;
        this.dressers//dresser
    }
}
class Booking{
    constructor(){
        this.number;
        this.dresser;//reference
        this.hairdo;
        this.date;
        this.startTime;
        this.duration;
    }
}
function f1(a,b,c){
    //property-builder
    const _context=a;
    const propertyName=b;
    const defaultValue=c;
    const history=window.history;
        return history.state ? ( history.state[_context] ? history.state[_context][propertyName] || defaultValue : defaultValue ) : defaultValue;
}
function f2(a){
    const query=a;
    const client=new GraphQLClient('http://localhost:3333/',{mode:'cors'});
    client.request(query).then((response)=>{
        return console.log(response);
    });
}
export {f2, f1}