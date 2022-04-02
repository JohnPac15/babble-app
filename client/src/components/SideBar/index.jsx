import React, { useState } from "react";
import {
  BsChatDots,
  BsCalendar2Week,
  BsPerson,
} from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { BiLogIn } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1.2rem;
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  color: var(--white);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0.3);

`;

const Logo = styled.div`
  width: 2rem;
`;

const Slickbar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 3rem 0;

  position: absolute;
  top: 5rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(Link)`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  text-decoration:none;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
  color:var(--white);

`;

const Container = styled.div`
  position: absolute;

`;

function SideBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        <TiThMenu />
      </Button>
      <SidebarContainer>
        <Logo>
          <h1>B</h1>
        </Logo>
        <Slickbar clicked={click}>
       
            <Item to="/">
              <AiOutlineHome className="icon" />
              <Text clicked={click}>Home</Text>
            </Item>

    
            <Item to="/profile">
              <BsPerson className="icon" />
              <Text clicked={click}>Profile</Text>
            </Item>


            <Item to="/messages">
              <BsChatDots className="icon" />
              <Text clicked={click}>Chat</Text>
            </Item>


            <Item>
              <BsCalendar2Week className="icon" />
              <Text clicked={click}>Events</Text>
            </Item>


            <Item to="/login">
              <BiLogIn className="icon" />
              <Text clicked={click}>Login</Text>
            </Item>

 
            <Item to="/signup">
              <BiLogIn className="icon" />
              <Text clicked={click}>Sign Up</Text>
            </Item>

        </Slickbar>
      </SidebarContainer>
    </Container>
  );
}

export default SideBar;
