import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const AccordionSec = () => {
  const [open, setOpen] = useState(null);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <Accordion open={open} toggle={toggle} className="rounded-4">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} className="border-0 rounded-4">
            <AccordionHeader targetId={index}>{item.question}</AccordionHeader>
            <AccordionBody
              accordionId={index}
              className="text-start text-muted mb-2">
              {item.answer}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const faqItems = [
  {
    question: "Why do I see ads in the app?",
    answer:
      "The app is free and supported by Google Ads to ensure accessibility for everyone.",
  },
  {
    question: "How can I remove ads?",
    answer:
      "We currently do not offer an ad-free version but may consider it in the future.",
  },
  {
    question: "Why is the app not working properly?",
    answer:
      "Please ensure you have the latest version installed and a stable internet connection.",
  },
  {
    question: "Can I use the app offline?",
    answer:
      "Some features require an internet connection, particularly for loading ads.",
  },
];

export default AccordionSec;
