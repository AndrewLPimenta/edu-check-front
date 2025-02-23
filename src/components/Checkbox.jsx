import React from "react";
import styled from "styled-components";
import "../styles/global.css";

const Checkbox = ({ menuActive, onClick }) => {
  return (
    <StyledWrapper>
      <label className="burger" htmlFor="burger" onClick={onClick}>
        <input
          type="checkbox"
          id="burger"
          checked={menuActive}
          onChange={onClick}
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: none; /* Ocultamos o hambúrguer por padrão */
    z-index: 2;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 9px;
    left: 0;
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  /* Animações quando o checkbox é marcado (menu aberto) */
  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }

  /* Exibe o hambúrguer apenas em telas menores que 750px */
  @media (max-width: 750px) {
    .burger {
      display: block;
    }
  }

  /* Garantir que o hambúrguer desapareça em telas maiores */
  @media (min-width: 751px) {
    .burger {
      display: none; /* O hambúrguer é ocultado em telas grandes */
    }
  }
`;

export default Checkbox;