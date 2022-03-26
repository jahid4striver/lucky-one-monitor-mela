import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer-container'>
            <div className='answer'>
                <h3 className='ans-head'>How React Works?</h3>
                <p>React is a javascript libarry to build fast User Interface.React is components based javascript libarry.When we create a components React render it and show it in the browser in the mean time react create a Virtual Dom. When we change a state or data in actual Dom react compare it with Virtual Dom and Change the state and data without reloading the page of actual Dom. That's how does react works, So we can create SPA Single Page Application with react which is very user freindly.</p>
            </div>
            <div className='answer'>
                <h3 className='ans-head'>Props Vs State</h3>
                <p>Props in React allow to pass data from one component to another component on the other hand State keep information about components. Props are Read-only can't change and immutable on the other hand State change asynchronously and it is is mutable. Child component can access to Props but State Can't be accessed by child components. Any Stateless component can have Props but Stateless components can't have State. Props make components reusable on the other hand State can't make components reusable.</p>
            </div>
        </div>
    );
};

export default Answer;