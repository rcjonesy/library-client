import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar color="dark" expand="md">
        <Nav navbar>
          <NavbarBrand href="/" style={{color: 'white'}}>📖 Loncotes County Library</NavbarBrand>
          <NavItem>
            <NavLink href="/materials" style={{color: 'white'}}>Materials</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/patrons" style={{color: 'white'}}>Patrons</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/checkouts" style={{color: 'white'}}>Checkouts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/browse" style={{color: 'white'}}>Browse</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/overduecheckouts" style={{color: 'white'}}>Overdue Checkouts</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
