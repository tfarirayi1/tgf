import Home from './home';
import Services from './services';
import Service from './service';
import Menu from './menu';
export const Routes=[
    {
        endpoint:'/',
        component:Home
    }
    ,{
        endpoint:'/services',
        component:Services,
    },{
        endpoint:'/menu',
        component:Menu,
    }
    ,{
        endpoint:'/service/:id',
        component:Service
    }
    // ,{
    //     endpoint:'/stylists',
    //     title:'stylists',
    //     exact:false,
    //     component:Stylists
    // }
    // ,{
    //     endpoint:'/calendar',
    //     title:'calendar',
    //     exact:false,
    //     component:Calendar
    // },
];