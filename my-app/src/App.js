import './App.css';
import {useState} from "react";
import {colors} from './colors.js';
import { BsHeart  } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from 'react-router-dom';
import FavoriteModal from './components/js/FavoriteModal.js';


function App() {
  const [show, setShow] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logo = require('./images/AggieApartmentLogo.png');
  const menu = require('./images/menu.png');

  function handleFavoriteClick(){
    setFavoriteClicked(true);
  }
  return (  
      <div className="App">
        {/* Header */}
        <div style={{color: colors["blue"]}} className="App-header">
          <div className="logoContainer">
            <Link to="/">
              <img className="logo" src={logo} alt={"AggieApartment"}/>
            </Link>
          </div>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Apartment"
                className="me-2"
                aria-label="Search Apartment"
              />
            </Form>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <div style={{marginRight: "40px"}} onClick={handleFavoriteClick}>
                <BsHeart fontSize="36px" />
              </div>
              <div onClick={handleShow} style={{width: "100px"}}>
                <img className="logo" src={menu} alt={"menu"}/>
              </div>
            </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <div >
              <Offcanvas.Body style={{display: "flex", flexDirection: "column"}}>
                <Button variant="light"> Sign up </Button>
                <Button variant="light"> Sign in </Button>
                <Button variant="light"> Add apartment </Button>
                <Button variant="light"> Help </Button>
              </Offcanvas.Body>
            </div>
          </Offcanvas>
          <FavoriteModal show={favoriteClicked} onHide={() => setFavoriteClicked(false)} />

        </div>

        {/* Children of React Router defined in index.js */}
        <Outlet/>
        

      </div>
    
  );
}

export default App;
