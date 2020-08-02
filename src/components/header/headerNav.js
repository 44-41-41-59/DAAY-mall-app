import React from 'react';
import { Link } from 'react-router-dom';
import { connect,useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Show from '../show';

function HeaderNav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to='/stores' >Stores</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <Show condition={props.owner}>
            <li class="nav-item">
              <Link class="nav-link" to={`/store/${props.user.stores}`} >My Store</Link>{' '}
            </li>
          </Show>
          <li class="nav-item dropdown">
            <NavDropdown title="Categories" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  let owner=false;
  if(state.user.role==='owner'){
    owner=true;
  }
  return {
    user: state.user,
    fetch: state.fetching,
    owner,
    store:state.store,
  };
};
  
export default connect(mapStateToProps)(HeaderNav);
