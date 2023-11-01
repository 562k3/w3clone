import React from "react";
import '../App.css';


const Sqlpage = () => {

    return (
        <div className="htmlpage">
            <div className="htmlpage-one">
            <button><p>Sql home</p></button>
            <button><p>Sql introduction </p></button>
                    <button><p>Sql RDBMS</p></button>
                   
                   
                    <button><p>Sql SQL</p></button>
                    <button><p>Sql WHERE</p></button>
                    <button><p>Sql AND, OR, NOT</p></button>
                    <button><p>Sql ORDER BY</p></button>
                    <button><p>Sql INSERT INTO</p></button>
                    <button><p>Sql NULL Values</p></button>
                    <button><p>Sql UPDATE</p></button>
                    <button><p>Sql DELETE</p></button>
                    <button><p>Sql LIMIT</p></button>
                    <button><p>Sql MIN and MAX</p></button>
                    <button><p>Sql COUNT, AVG, SUM</p></button>
                    <button><p>Sql LIKE</p></button>
                   
                  
            </div>
            <div className="htmlpage-two">
                <div className="htmlpage-two-content">
                <div><h1>SQL</h1></div>
                <p>
                SQL is a standard database language used to access and manipulate data in databases. SQL stands for Structured Query Language. SQL was developed by IBM Computer Scientists in the 1970s. By executing queries SQL can create, update, delete, and retrieve data in databases like MySQL, Oracle, PostgreSQL, etc. Overall SQL is a query language that communicates with databases.
                </p>
                <p>
                In this SQL tutorial, you’ll learn all the basic to advanced concepts like SQL queries, SQL join, SQL injection, SQL insert, create tables in SQL. SQL is easy to learn, there are no prerequisites to learning SQL.


                </p>
                <p>
                Data is the new fuel of this world but only data is unorganized information, so to organize that data we make a database. A database is the organized collection of structured data which is usually controlled by a database management system (DBMS). Databases help us with easily storing, accessing, and manipulating data held on a computer.


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
export default Sqlpage;