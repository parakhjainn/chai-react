
const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'click me to visit google'
};

/* Below Code will give error because reactElement is not in the form which render() expects
ReactDOM.createRoot(document.getElementById('root')).render(
    <reactElement />
)
*/

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
);

// Below Code works bcz render() expects what we give in anotherElement
ReactDOM.createRoot(document.getElementById('root')).render(
  <anotherElement />
)
