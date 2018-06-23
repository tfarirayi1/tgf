import Home from './home';
import Studio from './studio';
import Contact from './contact';
export const Routes=[
    {
        endpoint:'/',
        component:Home,
        link_name:'home'
    }
    ,{
        endpoint:'/studio',
        component:Studio,
        link_name:'studio'
    },{
        endpoint:'/contact',
        component:Contact,
        link_name:'contact'
    },
];