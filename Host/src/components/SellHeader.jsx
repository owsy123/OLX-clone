import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const SellHeader = (props) => {
  const history = useHistory();
  return (
    <div>
      <header>
        <nav>
          <Navbar className="navCss">
            <Container fluid className="sellHeader">
              <div className="mr-5" onClick={() => history.goBack()}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
              <Navbar.Brand className="mr-auto">
                {props.headerHeading === undefined && (
                  <Link to="/">
                    <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
                      <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                    </svg>
                  </Link>
                )}
                {props.headerHeading && <h5 className="my-auto">{props.headerHeading}</h5>}
              </Navbar.Brand>
            </Container>
          </Navbar>
        </nav>
      </header>
    </div>
  );
};

export default SellHeader;
