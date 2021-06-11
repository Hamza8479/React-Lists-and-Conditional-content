import React, { useState } from "react";

function ErrorBoundary(props) {
  const [state, setState] = useState({
    hasError: false,
    errorMsg: "",
  });

  const didCatchErr = (error, info) => {
    setState({
      hasError: true,
      errorMsg: error,
    });
  };
  let msg = "";
  if (state.hasError) {
    msg = <h1>{state.errorMsg}</h1>;
  } else {
    msg = props.children;
  }
  return <div>{msg}</div>;
}

export default ErrorBoundary;
