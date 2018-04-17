### _project----project-zero-main
#### [react](https://reactjs.org 'react homepage') web-application boilerplate  
### _philosophy  
#### a web-application consists of endpoints  
  * an endpoint exposes a set of resources
#### a react component has properties
  * the properties are used to determine the behaviour and look of a component.  
#### a react component has working memory, which can store a property and its 'state value'
  * properties are loaded into working memory with their historical state values or default ones.  
  * a component is manipulated by changing the state values of its properties.
### _packages
#### react  
  * component based javascript framework.
#### react-router-dom  
  * declarative routing library for react.
#### aws-amplify  
  * cognito identity authentication library.  
### _components   
#### AppContainer.js   
* app-container component
  * determines the visual layout of the application.
  * provides an always accessible hidden menu.
  * provides an always accessible login.
  * provides routing.
#### HelpRouter.js   
* endpoint-router component
  * provides a way of protecting a '1st level endpoint' and/or its child endpoints.
  * provides routing.
#### Help.js  
* resource component
  * resource provided at '/help'.
#### Faq.js  
* resource component
  * resource provided at '/help/faq'.
#### AccessDenied.js
* resource exposed at all restricted endpoints when the user is not authorised.
