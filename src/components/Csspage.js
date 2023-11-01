import React from "react";
import '../App.css';


const Csspage = () => {

    return (
        <div className="htmlpage">
            <div className="htmlpage-one">
                    <button><p>CSS home</p></button>
                    <button><p>CSS intro</p></button>
                    <button><p>CSS syntax</p></button>
                    <button><p>CSS selectors</p></button>
                    <button><p>CSS how to</p></button>
                    <button><p>CSS comments</p></button>
                    <button><p>CSS colors</p></button>
                    <button><p>CSS backgrounds</p></button>
                    <button><p>CSS borders</p></button>
                    <button><p>CSS margin</p></button>
                    <button><p>CSS padding </p></button>
                    <button><p>CSS height</p></button>
                    <button><p>CSS width</p></button>
                    <button><p>CSS box modal</p></button>
                    <button><p>CSS outline</p></button>
                  
                    
                  
            </div>
            <div className="htmlpage-two">
                <div className="htmlpage-two-content">
                <div><h1>CSS</h1></div>
                <p>
                Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independently of the HTML that makes up each web page. It describes how a webpage should look: it prescribes colours, fonts, spacing, and much more. In short, you can make your website look however you want. CSS lets developers and designers define how it behaves, including how elements are positioned in the browser.
                </p>
                <p>
                While HTML uses tags, CSS uses rulesets. CSS is easy to learn and understand, but it provides powerful control over the presentation of an HTML document.
                </p>
                <p>
                CSS saves time: You can write CSS once and reuse the same sheet in multiple HTML pages.
Easy Maintenance: To make a global change simply change the style, and all elements in all the webpages will be updated automatically.
Search Engines: CSS is considered a clean coding technique, which means search engines won’t have to struggle to “read” its content.
Superior styles to HTML: CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.
Offline Browsing: CSS can store web applications locally with the help of an offline cache. Using this we can view offline websites.
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
export default Csspage;