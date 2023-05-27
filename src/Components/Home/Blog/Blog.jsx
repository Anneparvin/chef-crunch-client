
import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Blog = () => {
    const id = useLoaderData()


    return (
      <div className='max-w-[1440px]  rounded-lg p-4 mb-4'>
     
          <section>
          <h1 class="text-4xl text-center font-bold underline mt-4 p-4">Blog Question</h1>
        <div className='"grid grid-cols-1 lg:grid-cols-1 gap-4 mt-12 p-4"'>


        {/* question 1 */}
        <div className="card w-full  h-auto bg-lime-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-4xl font-bold">Differences between uncontrolled and controlled components?</h2>
    <p className='text-xl justify-start'>
    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
    <br></br>
    In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.</p>
    
  </div>
</div>
        {/* question 2 */}
        <div className="card w-full  h-auto bg-lime-100 shadow-xl mt-4">
  <div className="card-body">
    <h2 className="text-4xl font-bold">How to validate React props using PropTypes?</h2>
    <p className='text-xl justify-start'>
    React PropTypes validators <br></br>
        # any : The prop can be of any data type.<br></br>
        # bool : The prop should be a Boolean.<br></br>
        # number : The prop should be a number.<br></br>
        # string : The prop should be a string.<br></br>
        # func : The prop should be a function.<br></br>
        # array : The prop should be an array.<br></br>
        # object : The prop should be an object.<br></br>
        And we validate them by setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as. 
    </p>
    
  </div>
</div>
        {/* question 3 */}
        <div className="card w-full h-auto bg-lime-100 shadow-xl mt-4">
  <div className="card-body">
    <h2 className="text-4xl font-bold">difference between nodejs and express js?</h2>
    <p className='text-xl justify-start'>
    NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.
    <br></br>
    Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. <br></br>
    NodeJS, ExpressJS manages server setup clutter more efficiently. In contrast, NodeJS has an event-driven, non-blocking I/O model.</p>
    
  </div>
</div>

{/* {/* question 4 */}
        <div className="card w-full h-auto bg-lime-100 shadow-xl mt-4">
  <div className="card-body">
    <h2 className="text-4xl font-bold">What is a custom hook, and why will you create a custom hook?</h2>
    <p className='text-xl justify-start'>
    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which ensures clean code and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
    
  </div>
</div>
       
        
          </div>
            </section>  
            
        </div>
        
    );
};

export default Blog;