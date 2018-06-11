import Home from './home';
import Services from './services';
export const Routes=[
    {
        endpoint:'/',
        exact:true,
        component:Home
    }
    ,{
        endpoint:'/services',
        exact:true,
        component:Services
    }
    // ,{
    //     endpoint:'/account',
    //     title:'account',
    //     exact:false,
    //     component:AccountRouter
    // }
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