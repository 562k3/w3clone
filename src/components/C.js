import React from "react";
import '../App.css';


const C = () => {

    return (
        <div className="htmlpage">
            <div className="htmlpage-one">
                    <button><p>C home</p></button>
                    <button><p>C intro</p></button>
                    <button><p>C get started</p></button>
                    <button><p>C syntax</p></button>
                    <button><p>C output</p></button>
                    <button><p>C comments</p></button>
                    <button><p>C variables</p></button>
                    <button><p>C data types</p></button>
                    <button><p>C constants</p></button>
                    <button><p>C operators</p></button>
                    <button><p>C booleans</p></button>
                    <button><p>C if...else</p></button>
                    <button><p>C switch</p></button>
                    <button><p>C while loop</p></button>
                    <button><p>C for loop</p></button>
                   
                    
                  
            </div>
            <div className="htmlpage-two">
                <div className="htmlpage-two-content">
                <div><h1>C</h1></div>
                <p>
                C is a procedural programming language initially developed by Dennis Ritchie in the year 1972 at Bell Laboratories of AT&T Labs. It was mainly developed as a system programming language to write the UNIX operating system.
                </p>
                <p>
                Many later languages have borrowed syntax/features directly or indirectly from the C language. Like syntax of Java, PHP, JavaScript, and many other languages are mainly based on the C language. C++ is nearly a superset of C language (Only a few programs may compile in C, but not in C++).

So,  if a person learns C programming first, it will help him to learn any modern programming language as well. As learning C help to understand a lot of the underlying architecture of the operating system. Like pointers, working with memory locations, etc.


                </p>
                <p>
                The first and foremost component is the inclusion of the Header files in a C program. A header file is a file with extension .h which contains C function declarations and macro definitions to be shared between several source files. All lines that start with # are processed by a preprocessor which is a program invoked by the compiler. In the above example, the preprocessor copies the preprocessed code of stdio.h to our file. The .h files are called header files in C.
Some of the C Header files:
                </p>
                <p>
                The next part of a C program is to declare the main() function. It is the entry point of a C program and the execution typically begins with the first line of the main(). The empty brackets indicate that the main doesn’t take any parameter (See this for more details). The int that was written before the main indicates the return type of main(). The value returned by the main indicates the status of program termination. See this post for more details on the return type.


                </p> 
                </div>
            </div>
        </div>
    )
}
export default C;