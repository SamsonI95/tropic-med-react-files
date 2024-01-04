import React from "react";
import { AccordionData } from "./AccordionData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div``;

const AccordionContainer = styled.div``;

function Accordion() {
  return (
    <>
      <IconContext.Provider>
        <AccordionSection>
          <AccordionContainer>
            {AccordionData.map((item, index) => {
              <>
                <h1>{item.question}</h1>
                <p>{item.answer}</p>
              </>;
            })}
          </AccordionContainer>
        </AccordionSection>
      </IconContext.Provider>
    </>
  );
}

export default Accordion;
