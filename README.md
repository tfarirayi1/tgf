### _project----project-zero-main
#### [react](https://reactjs.org 'react homepage') web-application boilerplate  
### _philosophy  
#### a web-application consists of endpoints  
  * an endpoint exposes a set of resources.
#### a react component has properties
  * the properties are used to determine the behaviour and look of a component.  
#### a react component has working memory which can store the 'working value' of a property
  * properties are loaded into working memory with their historical working values or with default working values.  
  * a component is manipulated in realtime by changing the working values of its properties.
### _packages
#### react  
  * component based javascript framework.
#### react-router-dom  
  * declarative routing library for react.
#### aws-amplify  
  * cognito identity authentication library.  
### _components   
#### AppShell.js   
* app-shell component
  * determines the visual layout of the application.
  * provides an always accessible hidden menu.
  * provides an always accessible login.
  * provides routing for all root-folder endpoints (i.e 'origin/*').
#### HelpRouter.js   
* router component
  * provides a way of protecting an endpoint and its sub-endpoints.
  * takes responsibility for routing its sub-endpoints.
#### Help.js  
* resource component
  * ui resource provided at '/help'.
#### Faq.js  
* resource component
  * ui resource provided at '/help/faq'.
#### AccessDenied.js
* ui resource exposed at all restricted endpoints when the user is not authorised.
