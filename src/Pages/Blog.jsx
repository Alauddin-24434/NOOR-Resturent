import { Helmet } from "react-helmet";


const Blog = () => {
    return (
        <div className="bg-white p-4  border">
            <Helmet>

                <title>SignUp</title>

            </Helmet>
            <div className="mb-6">
                <h1 className="text-lg md:text-2xl">1. What is One way data binding?
                </h1>
                <ul className="flex justify-center items-center flex-col md:flex-row ">

                    <li className="w-full md:w-1/2 p-2">One-way data binding is a unidirectional flow of data from a data source to the user interface, ensuring that changes in the source are reflected in the UI, but not vice versa. It simplifies code and offers performance benefits by avoiding continuous monitoring of UI elements. User interactions with the UI typically do not directly affect the underlying data source in one-way data binding.
                        NPM (Node Package Manager) is a package manager for Node.js, which is a JavaScript runtime environment. It serves as a central repository for open-source JavaScript packages and modules that developers can use in their Node.js projects. NPM allows developers to easily discover, install, and manage dependencies for their Node.js applications, streamlining the development process and promoting code reuse. It is an essential tool in the Node.js ecosystem and is typically installed alongside Node.js when setting up a Node.js development environment.</li>
                    <li className="w-full md:w-1/2">
                        <img src="https://i.ibb.co/F76qL5z/one-way-data-binding-in-angular-1.png" alt="" />
                    </li>
                </ul>
            </div>
            <hr />
            <div className="my-6">
                <h1 className="text-lg md:text-2xl">2. What is NPM in node.js?
                </h1>
                <ul className="flex justify-center items-center flex-col md:flex-row">
                    <li className="w-full md:w-1/2 p-2">
                        NPM (Node Package Manager) is a critical component in the Node.js ecosystem, serving as a package manager for JavaScript libraries and modules. It allows developers to easily install, update, and manage dependencies for their Node.js projects, reducing the complexity of managing external code.

                        With NPM, developers can access a vast and constantly growing repository of open-source packages, enabling them to leverage the work of others and speed up development. NPM also provides a straightforward way to define project dependencies in a package.json file, making it easier to share and reproduce development environments across different machines.

                        In addition to its package management capabilities, NPM offers various tools and commands for running scripts, testing, and publishing packages, making it a versatile and powerful tool for Node.js developers. Overall, NPM plays a central role in the Node.js ecosystem, facilitating the development and distribution of JavaScript applications and libraries.
                    </li>
                    <li className="w-full md:w-1/2">
                        <img src="https://i.ibb.co/DggQRG1/Node-js-Architecture-1024x575.jpg" alt="" />
                    </li>
                </ul>

            </div>
            <hr />
            <div className="mt-6">
                <h1 className="text-lg md:text-2xl">3. Different between Mongodb database vs mySQL database
                </h1>
                <ul className="flex justify-center items-center flex-col md:flex-row">
                    <li className="w-full md:w-1/2 p-2">
                        Data Model: MongoDB is a NoSQL database, which means it uses a flexible, document-oriented data model, allowing you to store and retrieve data in a more dynamic and schema-less manner. MySQL, on the other hand, is a relational database that uses tables with predefined schemas.

                        Query Language: MongoDB uses a rich query language that supports complex queries, especially suited for unstructured data. MySQL employs SQL (Structured Query Language), which is optimized for querying structured data using a tabular format.

                        Scalability: MongoDB is designed for horizontal scalability and can handle large volumes of data and high traffic by distributing data across multiple servers. MySQL can scale vertically by adding more resources to a single server but may require more complex configurations for horizontal scaling.

                        Use Cases: MongoDB is often preferred for applications that deal with unstructured or semi-structured data, such as content management systems, real-time analytics, and IoT applications. MySQL is a good choice for applications with structured data, like e-commerce platforms, financial systems, and traditional relational database use cases.

                        The choice between MongoDB and MySQL depends on the specific needs of your project and the nature of your data.
                    </li>
                    <li className="w-full md:w-1/2 h-1/2">
                        <img className="h-96 w-full " src="https://i.ibb.co/pvRWjvX/Mongodb-vs-mysql.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;