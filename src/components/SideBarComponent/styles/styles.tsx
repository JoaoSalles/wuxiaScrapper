import styled from 'styled-components';
import { BLACK_LIGHT, BLACK_DARK, BLACK, WHITE } from '../../../constants/styles/colors'

const NavUl = styled.ul`
  width: 8vw;
  min-width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;

  li {
    border-top: 1px solid ${BLACK_LIGHT};

    &:first-of-type {
      border: none;
    }

    a {
      color: ${WHITE};
      text-decoration: none;
    }

    button {
      background: ${BLACK};
      border: none;
      color: ${WHITE};
      cursor: pointer;
      padding: 5px 0;
      width: 100%;

      &.selected {
        background: ${BLACK_DARK};
      }

      &:hover{
        background: ${BLACK_LIGHT}
      }
    }
  }

  @media only screen and (max-width: 700px) {
    position: absolute;
    li:first-of-type {
      border-top: 1px solid ${BLACK_LIGHT};
    }
  }
`;

const SideNav = styled.div`
  background: ${BLACK};
  min-height: 100%;

  .hamburguer {
    align-items: center;
    background: ${BLACK};
    border: 0;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    height: 25px;
    justify-content: center;
    padding: 0;
    width: 25px;

    &.selected {
      background: ${BLACK_DARK};
    }

    .line {
      margin-bottom: 2px;
      border: 1px solid ${WHITE};
      width: 10px;
    }
  }
`;


export { NavUl, SideNav }