import React from "react";
import '../App.css';


const Reactpage = () => {

    return (
        <div className="htmlpage">
            <div className="htmlpage-one">
                    <button><p>React home</p></button>
                    <button><p>React intro</p></button>
                    <button><p>Get started</p></button>
                    <button><p>React upgrade</p></button>
                    
                    <button><p>React ES6</p></button>
                    <button><p>React render HTML</p></button>
                    <button><p>React JSX</p></button>
                    <button><p>React components</p></button>
                    <button><p>React class</p></button>
                    <button><p>React props</p></button>
                    <button><p>React events</p></button>
                    <button><p>React conditionals</p></button>
                    <button><p>React lists</p></button>
                    <button><p>React forms</p></button>
                    <button><p>React router</p></button>
        
                   
                  
            </div>
            <div className="htmlpage-two">
                <div className="htmlpage-two-content">
                <div><h1>React</h1></div>
                <p>
                ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of a Model View Controller(MVC) architecture. React is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data.


                </p>
                <p>
                Let’s say one of your friends posted a photo on Facebook. If you like the photo and then you started checking out the comments too. Now as you browsing over comments you can see that the likes count has increased by 100 since you liked the picture, even without reloading the page. This magical change in count is due to ReactJS.


                </p>
                <p>
                ReactJS uses a declarative paradigm that allows for applications to be both effective and flexible. It creates simple views for each state in your application and efficiently updates and renders just the right component as your data changes. The declarative view makes your code more predictable and easier to debug. Each component in a React application is responsible for rendering a separate, reusable piece of HTML code. The ability to nest components within other components allows you to build complex applications from simple building blocks. A component can also keep track of its internal state, for example, a TabList component can hold a variable for the open tab in memory.
                </p>
                {/* <p>
                HTML page structure: The basic structure of an HTML page is laid out below. It contains the essential building-block elements (i.e. doctype declaration, HTML, head, title, and body elements) upon which all web pages are created.
                </p>
                <p>
                An HTML document can be created using any text editor. Save the text file using .html or .htm. Once saved as an HTML document, the file can be opened as a webpage in the browser.
                </p> */}
                </div>
            </div>
        </div>
    )
}
export default Reactpage;