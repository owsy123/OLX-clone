import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import "../styles/Header.css";
import Login from "./Login";
import SellBtn from "./SellBtn";
// import firebase from "../config/firebase";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Navbar className="navCss">
            <Container fluid="lg">
              <Navbar.Brand>
                <Link to="/">
                  <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
                    <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                  </svg>
                </Link>
              </Navbar.Brand>

              <InputGroup className="mb-3 my-auto navInpFeildContainer">
                <InputGroup.Prepend>
                  <Button className="navbtnSearch1" variant="">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
                      <path style={{ fill: "#002f34" }} d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                    </svg>
                  </Button>
                </InputGroup.Prepend>

                <FormControl className="navInpFeild1 h-100" type="text" placeholder="Location" />

                <InputGroup.Append className="inputAppend1">
                  <div className="dropdown">
                    <i className="fa fa-angle-down" aria-hidden="true" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>

                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                      <Link className="dropdown-item disabled" to="#">
                        Location
                      </Link>
                      <div className="dropdown-divider"></div>
                      <span className="dropdown-item" href="#">
                        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Sindh
                      </span>
                      <span className="dropdown-item" href="#">
                        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Balochistan
                      </span>
                      <span className="dropdown-item" href="#">
                        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>kpk
                      </span>
                      <span className="dropdown-item" href="#">
                        <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Punjab
                      </span>
                    </div>
                  </div>
                </InputGroup.Append>
              </InputGroup>

              <Form inline className="w-100 mx-2" style={{ backgroundColor: "re" }}>
                <InputGroup className="mb-3 my-auto w-100">
                  <FormControl className="navInpFeild2 form-control-lg d-none d-md-block" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                  <InputGroup.Append>
                    <Button className="navbtnSearch2 btn-lg" variant="">
                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
                        <path style={{ fill: "white" }} d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                      </svg>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Login />
                  <SellBtn />
                  {/*<div className="sell-btn-div">
                    <Link to="#">
                      <div className="_21nYN ml-4">
                        <svg width="104" height="48" viewBox="0 0 1603 768" className="_3V9PS">
                          <g>
                            <path className="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
                            <path className="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
                            <path className="_2bClX _3uYj7" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
                            <path className="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
                          </g>
                        </svg>

                        <div className="DrSmZ">
                          <span className="EgzsJ">
                            <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
                              <path className="rui-367TP" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
                            </svg>
                          </span>
                          <span>Sell</span>
                        </div>
                      </div>
                    </Link> 
                  </div>*/}
                  {/* </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </header>
    </div>
  );
};

export default Header;
