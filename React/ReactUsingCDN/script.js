// const react = React;
// console.log(react);
// console.log(ReactDOM);

const h1 = React.createElement("h1", null, "Hello World!");

const reactDOM = ReactDOM.createRoot(document.querySelector("#parent"));

reactDOM.render(h1);