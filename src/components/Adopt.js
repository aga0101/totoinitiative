import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Adopt = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <header class="masthead bg-primary text-white text-center">
       <div class="container d-flex align-items-center flex-column">
  
       </div>
        </header>
    </Fragment>
  );
};

export default Adopt;