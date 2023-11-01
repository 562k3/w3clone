import React from "react";
import '../App.css';


const Excel = () => {

    return (
        <div className="htmlpage">
            <div className="htmlpage-one">
                    <button><p>Excel home</p></button>
                    <button><p>Excel introduction</p></button>
                    <button><p>Excel get started</p></button>
                    <button><p>Excel overview</p></button>
                    <button><p>Excel syntax</p></button>
                    <button><p>Excel ranges</p></button>
                    <button><p>Excel ranges</p></button>
                    <button><p>Excel fill</p></button>
                    <button><p>Excel maove cells</p></button>
                    <button><p>Excel delete cells</p></button>
                    <button><p>Excel undo redo</p></button>
                    <button><p>Excel formulas</p></button>
                    <button><p>Excel relative reference</p></button>
                    <button><p>Excel absolute reference</p></button>
                    <button><p>Excel arithmetic reference</p></button>
                  
            </div>
            <div className="htmlpage-two">
                <div className="htmlpage-two-content">
                <div><h1>Excel</h1></div>
                <p>
                MS-EXCEL is a part of Microsoft Office suite software. It is an electronic spreadsheet with numerous rows and columns, used for organizing data, graphically represent data(s), and performing different calculations.  It consists of 1048576 rows and 16384 columns, a row and column together make a cell. Each cell has an address defined by column name and row number example A1, D2, etc. this is also known as a cell reference.
                </p>
                <p>
                Cell references: The address or name of a cell or a range of cells is known as Cell reference. It helps the software to identify the cell from where the data/value is to be used in the formula. We can reference the cell of other worksheets and also of other programs.


                </p>
                <p>
                Referencing the cell of other worksheets is known as External referencing.
Referencing the cell of other programs is known as Remote referencing.

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
export default Excel;