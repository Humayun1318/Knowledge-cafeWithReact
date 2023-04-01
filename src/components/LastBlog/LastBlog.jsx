import React from 'react';
import './LastBlog.css';


const LastBlog = () => {
    return (
        <div className='last-blog-container'>
            <h2 className='last-bl-title'>This is the Last Blog</h2>
            <div className='container-for-grid'>
                <div className="individual-question">
                    <h2>Qus 1: Difference between props ans state?</h2>
                    <p className='answer'><span className='Ans'>Ans:</span> In React, props and state are 
                     both used to manage data in 
                      a component. However, they have different roles. Props are passed from a parent 
                      component to a child component and are read-only. They cannot be modified within 
                      the child component. <br /> State, on the other hand, is used to manage data 
                      within a component. It can be modified using the setState() method. </p>
                </div>
                <div className="individual-question">
                    <h2>Qus 2: How does useState Work?</h2>
                    <p className='answer'><span className='Ans'>Ans:</span> useState is a built-in hook 
                     provided by React that allows 
                     functional components to manage state. It returns an array with two values: the 
                     current state value and a function to update the state value. When the setState 
                     function is called, React schedules a re-render of the component with the updated 
                     state value. Overall, useState is a powerful hook that allows functional 
                     components to manage state in a straightforward and efficient way. <br />
                     const [state, setState] = useState(initialState);<br /> Here, state is the 
                     current state value and setState is a function that can be used to update the 
                     state value. initialState is the initial value of the state.</p>
                </div>
                <div className="individual-question">
                    <h2>Qus 3: How does useEffect work in react?</h2>
                    <p className='answer'><span className='Ans'>Ans:</span> useEffect is a built-in hook 
                     provided by React that 
                      allows functional components to perform side effects. A side effect is any 
                      operation that affects something outside the scope of the component, such as 
                      fetching data from an external API, manipulating the DOM, or setting up a 
                      subscription to a WebSocket.
                        <br />
                        <br />
                        In React, components can have different lifecycle stages, such as mounting, 
                        updating, and unmounting. useEffect allows developers to specify side effects 
                        that should be executed after a component has rendered or after certain props or 
                        state values have changed.
                        <br />
                        <br />
                        useEffect takes two parameters: a function that contains the side effect code and 
                        an optional array of dependencies that determine when the side effect should be 
                        executed.  </p>
                </div>
                <div className="individual-question">
                    <h2>Qus 4: How does React Work?</h2>
                    <p className='answer'><span className='Ans'>Ans:</span> React is a library for 
                     building user interfaces in 
                      JavaScript. Developers write reusable UI components and organize them into a tree- 
                      like structure called a virtual DOM. When the application runs, React creates a 
                      virtual representation of the UI and compares it to the actual DOM to update the 
                      UI efficiently. React also provides state management, event handling, and other 
                      features to make it easier to create dynamic and interactive UIs. Overall, React 
                      is a powerful tool for building complex web applications with reusable components 
                      and efficient updates. </p>
                </div>
            </div>
            
        </div>
    );
};

export default LastBlog;