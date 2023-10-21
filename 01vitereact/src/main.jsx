import React from "react";


/* Below Code will give error because reactElement is not in the form which render() expects

const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'click me to visit google'
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <reactElement />
)
*/


// Below Code works bcz render() expects what we give in anotherElement

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <anotherElement />
)


// How to create reactElement in the way render() expects
const username = "parakh jain"

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google',
  username
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <reactElement />
)