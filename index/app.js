const addingColor = {color: '#42f5b0'}
const heading = React.createElement("h1", {style:addingColor}, "Hello React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("name1"));
root.render(heading);

const headingStyle = { color: 'blue' };
const technolgy = React.createElement("h3" , {style:headingStyle}, "React is a Javascript Librariy");
const val1 = ReactDOM.createRoot(document.getElementById("name2"));
val1.render(technolgy);

const colorHeading = { color: 'red' };
const web = React.createElement("h4" , {style:colorHeading}, "React is a Frontend Web Technolgy");
const val2 = ReactDOM.createRoot(document.getElementById("name3"));
val2.render(web);


const parent = React.createElement(
    "div",
    {id: "parent"}, 
    
     React.createElement("div",
    {id: "child"}, 
    [React.createElement("h1", {},  "I'm an h1 tag") , React.createElement("h4", {},  "I'm an h4 tag")]
     ) 
);
console.log(parent);
const root1 = ReactDOM.render(parent, document.getElementById('root2'));
root1.render(parent);
