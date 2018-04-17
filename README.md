### _project----project-zero-main
#### [react](https://reactjs.org 'react homepage') web-application boilerplate  
### _philosophy  
#### a web-application is a collection of endpoints  
  * each endpoint exposes one or more of resources.
#### a react component has properties
  * these properties can be used to determine the behaviour and look of a component.  
#### a react component has working memory which can hold the 'working value' of a property
  * properties are loaded into working memory with their historical working values or with their default working values.  
  * a component is manipulated in realtime by changing the working values of its properties.
### _packages
#### react  
  * component based javascript framework.
#### react-router-dom  
  * declarative routing library for react.
#### aws-amplify  
  * cognito identity authentication library.  
### _components   
#### Shell.js   
* *shell-component*.
* provides an always accessible hidden app-menu.
* provides an always accessible login resource.
#### Origin.js
* *resource-component* exposed at the endpoint 'origin/'.
#### HelpRouter.js 
* *router-component* for the endpoint 'origin/help'.
#### AccountRouter.js 
* *router-component* for the endpoint 'origin/account'.
#### Help.js  
* *resource-component* exposed at the endpoint '/help'.
#### Account.js  
* *resource-component* exposed at the endpoint '/account'.
#### Faq.js  
* *resource-component* exposed at the endpoint '/help/faq'.
#### AccessDenied.js
* *resource-component* exposed at all private endpoints when the user is not authorised.
### _component types
#### shell-component
* determines the visual layout of the application.
* provides routing for all non-origin endpoints.
#### router-component
* provides a way of protecting any non-origin endpoint and its sub-endpoints.
* assumes responsibility for routing its sub-endpoints.
#### resource-component
* consumable resource exposed at an endpoint.
* should never route.

