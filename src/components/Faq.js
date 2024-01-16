
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Faq.css';
const Faq = ({ faqItems }) => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
    <div className="faqheading">
        FAQ
    </div>
    <div className="maindiv">
        <div className="faq-accordion">
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} />
          </div>
          {openIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Faq