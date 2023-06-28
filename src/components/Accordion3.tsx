import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import React from 'react';


export interface Accordion3Props {
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    title3: string;
    description3: string;
}

export const initialProps: Accordion3Props = {
    title1: "title1",
    description1: "description1",
    title2: "title2",
    description2: "description2",
    title3: "title3",
    description3: "description3",
};

const Accordion3 = ({ title1, description1, title2, description2, title3, description3}: Accordion3Props) => {
  return (
    <div>
    <Accordion>
      <AccordionItem header={`${title1}`}>
        {description1}
      </AccordionItem>

      <AccordionItem header={`${title2}`}>
        {description2}
      </AccordionItem>

      <AccordionItem header={`${title3}`}>
        {description3}
      </AccordionItem>
    </Accordion>
    </div>
  );
};

export default Accordion3;