import React from 'react';
import './Blog.css'
const Blog = () => {
    return (<div className='container my-5'>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How will you improve the performance of a React Application?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Data that we handle in one or more components is referred to as local state.The useState hook is most commonly used in React to manage local state.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        
      What are the different ways to manage a state in a React application?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Local state : Data that we handle in one or more components is referred to as local state.<br></br>
      Global state :When we wish to receive and change data from everywhere in our app, or at least across many components, we need global state.<br></br>
      Server state - Server state is a basic idea, but it can be difficult to manage alongside all of our other UI data, both local and global.<br></br>
      URL state -Data found on our URLs, such as pathnames and query parameters.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What is a unit test? Why should write unit tests?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Unit testing is a software development technique in which the smallest testable elements of a program, referred to as units, are individually and independently examined to guarantee proper operation. During the development phase, this testing method is used by software engineers and occasionally QA staff..</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{`const food =[
    {
        name :'apple',
        price:100

    },{
        name :'orange',
        price:233

    }
]
const Find=food.find(FindName)

function FindName(person){
    return person.name=='apple'
}
console.log(Find);`}</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Why you do not set the state directly in React? Why you do not set products = [...] instead, you use the setProducts<br></br>
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Because of the following reasons, we should never edit the state directly: if we update it directly, executing setState() thereafter may just overwrite the update you did. This.state is not changed instantly when we directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function. Across all components, we will lose control of the state.</div>
    </div>
  </div>
</div>
</div>
    );
};

export default Blog;