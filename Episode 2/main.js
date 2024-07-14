import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("h2", {id: "parent"},
//     React.createElement("h3", {}, "I am inside Child")
// );

const HeadingComponent = () => (
  <h1 className="heading" style={{ color: "red" }}>
    This is Heading Component
  </h1>
);

const FooterComponent = () => (
  <h1 className="footer" style={{ color: "green" }}>
    This is Footer Component
  </h1>
);

const MainComponent = () => {

    const addition = () => {
        console.log(1+5);
    }

  return (
    <>
      <HeadingComponent />
      <div>
        <h4 onClick={addition}>Hello!! This is Main Para :)</h4>
      </div>
      <FooterComponent />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('id'));
root.render(<MainComponent />);
