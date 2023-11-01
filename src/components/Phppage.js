import React from "react";
import "../App.css";

const Phppage = () => {
  return (
    <div className="htmlpage">
      <div className="htmlpage-one">
        <button>
          <p>PHP home</p>
        </button>
        <button>
          <p>PHP intro</p>
        </button>
        <button>
          <p>PHP install</p>
        </button>
        <button>
          <p>PHP syntax</p>
        </button>
        <button>
          <p>PHP comments</p>
        </button>
        <button>
          <p>PHP variables</p>
        </button>
        <button>
          <p>PHP echo</p>
        </button>
        <button>
          <p>PHP data types</p>
        </button>
        <button>
          <p>PHP strings</p>
        </button>
        <button>
          <p>PHP numbers</p>
        </button>
        <button>
          <p>PHP math</p>
        </button>
        <button>
          <p>PHP constants</p>
        </button>
        <button>
          <p>PHP operators</p>
        </button>
        <button>
          <p>PHP switch</p>
        </button>
        <button>
          <p>PHP loops</p>
        </button>
        
      </div>
      <div className="htmlpage-two">
        <div className="htmlpage-two-content">
          <div>
            <h1>PHP</h1>
          </div>
          <p>
            The term PHP is an acronym for PHP: Hypertext Preprocessor. PHP is a
            server-side scripting language designed specifically for web
            development. It is open-source which means it is free to download
            and use. It is very simple to learn and use. The files have the
            extension “.php”.
          </p>
          <p>
            Rasmus Lerdorf inspired the first version of PHP and participated in
            the later versions. It is an interpreted language and it does not
            require a compiler.
          </p>
          <p>
            PHP code is executed in the server. It can be integrated with many
            databases such as Oracle, Microsoft SQL Server, MySQL, PostgreSQL,
            Sybase, and Informix. It is powerful to hold a content management
            system like WordPress and can be used to control user access. It
            supports main protocols like HTTP Basic, HTTP Digest, IMAP, FTP, and
            others. Websites like www.facebook.com and www.yahoo.com are also
            built on PHP. One of the main reasons behind this is that PHP can be
            easily embedded in HTML files and HTML codes can also be written in
            a PHP file. The thing that differentiates PHP from the client-side
            language like HTML is, that PHP codes are executed on the server
            whereas HTML codes are directly rendered on the browser. PHP codes
            are first executed on the server and then the result is returned to
            the browser. The only information that the client or browser knows
            is the result returned after executing the PHP script on the server
            and not the actual PHP codes present in the PHP file. Also, PHP
            files can support other client-side scripting languages like CSS and
            JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Phppage;
