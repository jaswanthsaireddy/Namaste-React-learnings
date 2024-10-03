What is Emmet?

 Emmet  is useful for creating html and css code quickly , for example if i want to create a div inside div  and sibling of span 
 i can simple "div>span+div"

 https://devhints.io/emmet link for cheatsheet


2. Difference between a Library and Framework?

The main difference between a library and a framework in software engineering 
is that a library gives the developer control over the application flow,
while a framework controls the flow.

for already an existing javascript code we can add a react for some portion of the code and rest can be javascript ,
but other frameworks doesnt support this, in frameworks entire code should be written according to the framework
where as libraries like react doesnt force us to use react methodalagies for entire app.



3. What is CDN? Why do we use it?

Content delivery network
Using CDN links in React gives quick and convenient way to integrate React into your projects without the need for a package manager.
It's mostly useful for small projects, or when creating quick prototyping.
CDN links are useful for React development because they can: 
Improve performance
CDNs are optimized to deliver content quickly, which can improve the loading speed of your application. 
Save time
CDN links provide instant access to React and its libraries, so you don't need to install them locally. This can be especially helpful when you're first learning React. 
Simplify setup
CDN links eliminate the need for package managers like npm or yarn for basic React projects. 
Control versioning
CDN links often include versioning options, so you can specify which version of React you want to use. 
Experiment
CDN links are a convenient way to experiment with React without setting up a full development environment. 
Explore large libraries
You can explore large React libraries like Redux via CDN first, and then use them inside your Create-React-App project. 


4. Why is React known as React?

React is called "React" because of its core concept of enabling applications to "react" to changes in data. When data in a React application changes, the UI automatically updates or "reacts" to reflect those changes.
This reactive nature is achieved through a system called the virtual DOM, which efficiently updates and renders the parts of the user interface that have changed,
instead of re-rendering the entire page. This reactivity is central to React's design, making it fast, efficient, and easy to build dynamic user interfaces.

5. What is crossorigin in script tag?
Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
 The resources may include Audio, Video, Images,
 Link or external script that specifies whether to support a cross-origin request or not.


6 What is diference between React and ReactDOM

React is, at its core, a library for building user interfaces. It introduces the concept of components, which allow developers to craft reusable and self-contained UI elements
ReactDOM, on the other hand, acts as the glue between React’s Virtual DOM and the actual browser’s DOM. It provides the means to render React components into the DOM

7. What is difference between react.development.js and react.production.js files via CDN?

Development Environment: react.development.js Debugging Support: This file includes extra warnings and error messages to help developers identify and fix issues during development.

Code Size: Larger file size due to the inclusion of development-specific tools and warnings.

Performance: The development version is optimised for providing more helpful information and tools rather than being focused on minimal file size or performance.

Production Environment: react.production.js Minimised Code: This file is optimised for production use by removing development-specific warnings and tools, resulting in smaller file size.

Performance: It is tuned for better runtime performance in production environments.

Error Messages: Error messages are more concise, as the development-specific warnings are stripped away.

8. What is async and defer? - see my Youtube video 

let me explain clearly consider three cases

1) Normal <script> tag
    parsing starts
    when ever it comes to script tag , parsing stops
    script will be fetched
    then script will be execute 
    then parsing the html resumes.

2) Async script tag
    Parsing starts
    when script comes , it parallely fetches the script, "parsing doesnt stop"
    once its all fetched, parsing stops and , script will be executed.
    once all the script is executed , parsing resumes.

3) Defer tag
    Parsing starts
    when script comes, parsing doesnt stop and parallely it fetches the script
    even though teh fetching of the sccript  is done , it wont be executed
    once all the parsing is done
    script will executed.
