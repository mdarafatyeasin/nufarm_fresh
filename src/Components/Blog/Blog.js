import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='blog-section'>
            <div className="first-question">
                <h2>
                    1.What is the difference between javascript and nodejs?
                </h2>
                <p>node.JS and Javascript both of these are used for programming. But there is a significant difference between Node.JS and Javascript. JavaScript is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages. The Node.JS, on the other hand, helps in representing a list of all the methods and objects that the JavaScript code can access when run via node interpreters or in the V8 engine.
                </p>
            </div> <br /><br />
            <div className="second-question">
                <h2>
                    2.What are the differences between sql and nosql databases?
                </h2>
                <table>
                    <tr>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                    <tr>
                        <td>These databases have fixed or static or predefined schema</td>
                        <td>They have dynamic schema</td>
                    </tr>
                    <tr>
                        <td>These databases are not suited for hierarchical data storage.</td>
                        <td>These databases are best suited for hierarchical data storage.</td>
                        
                    </tr>
                    <tr>
                        <td>These databases are best suited for complex queries</td>
                        <td>These databases are not so good for complex queries</td>
                        
                    </tr>
                    <tr>
                        <td>Vertically Scalable</td>
                        <td>Horizontally scalable</td>
                        
                    </tr>
                </table>
            </div>
            <div className="third-question">
                <h2>
                    3.What is the purpose of jwt and how does it work?
                </h2>
                <p>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p><br />
                <p>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization
                </p>
            </div>
        </div>
    );
};

export default Blog;