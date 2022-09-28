import React from 'react';
import "./Question.css"
const Question = () => {
    return (

        <div className='title'>
            <div>
                <h2>Questions</h2>
            </div>
            <div className='question'>

                <div className='q-card'>
                    <h2>Q: How does React Work?</h2>
                    <p>React creates a DOM that is called Virtual DOM or React DOM. When there's changes in UI, then react compares with the virtual DOM using Diff Algorithm.When it detects the changes in the virtual DOM then it updates the Virtual DOM. After that this virtual DOM is executed in RealDOM and we can see the changes on UI.</p>
                </div>
                <div className='q-card'>
                    <h2>Q: What is the Difference between Props and State?</h2>
                    <p>Props are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions,event handlers may be passed in as props.On the other hand,The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.</p>
                </div>
                <div className='q-card'>
                    <h2>Q: What are the usage of useEffect?</h2>
                    <p>useEffect is used to handle the side effects of useState.By using useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.</p>
                </div>
            </div>
        </div>

    );
};

export default Question;