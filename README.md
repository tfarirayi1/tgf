### _project----project-zero-main
#### [react](https://reactjs.org 'react homepage') web application boilerplate  
### _philosophy  
#### a web application consists of endpoints  
  * an endpoint provides a set of resources
#### a react component has properties
  * the properties can determine what the component looks like.  
#### a react component has working memory, which holds for each property a 'working value'
  * properties can loaded into working memory with their historical working values or default ones.  
  * a component is manipulated by changing the working values of its properties.
### _packages
#### react  
  * component based javascript framework.
#### react-router-dom  
  * declarative routing library for react.
#### aws-amplify  
  * cognito identity authentication library.  
### _components   
#### AppContainer.js   
* must determine visual layout of the application.
* must provide a hidden menu.
* must provide a persistent toolbar.
* must provide a persistent way of signing in and out.
#### HelpContainer.js   
* an endpoint-container.
* provides a way of protecting an endpoint and its child endpoints.
#### Help.js  
* resource provided at '/help'.
#### Faq.js  
* resource provided at '/help/faq'.
#### AccessDenied.js
* resource exposed at all restricted endpoints when the user is not authorised.
