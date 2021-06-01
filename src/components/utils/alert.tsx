import React, {useState} from "react";

const AlertDismissible= () => {
    const [show, setShow] = React.useState(true);
    
    return (
      <>
        <div className = "alert alert-success" onClick ={() => {setShow(true);}} >
          <div className = "alert-header">Are you sure to exit?!</div>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <button onClick={() => setShow(false)} className="outline-success">
              Close me y'all!
            </button>
          </div>
        </div>
  
        {!show && <button onClick={() => setShow(true)}>Show Alert</button>}
      </>
    );
  };
  
  export default AlertDismissible;