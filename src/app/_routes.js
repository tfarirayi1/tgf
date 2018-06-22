import Home from './home';
import Studio from './studio';
import Contact from './contact';
export const Routes=[
    {
        endpoint:'/',
        component:Home,
        link_name:'Home'
    }
    ,{
        endpoint:'/studio',
        component:Studio,
        link_name:'Studio'
    },{
        endpoint:'/contact',
        component:Contact,
        link_name:'Contact'
    },
];