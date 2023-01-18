import React from   'react' ;

  const  Footer = () => {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="lead text-center">
                &copy;{new Date().getFullYear()} E-Commerce - All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;