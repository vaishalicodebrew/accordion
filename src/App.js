import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
    <div className="accordion">
      {faqs.map((faq,i) => <Accordion title ={faq.title} text={faq.text} num={i}/>)}   
    </div>
    </div>
  );
}

function Accordion({title,text,num}) {
  const [isOpen,setIsOpen] = useState(false)
  function handleClick(){
    setIsOpen((isOpen)=>!isOpen)
  }
  return (<div className= {`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
  <p className="number">{num < 9 ? `0 ${num+1}` : num+1}</p>
    <p className="title">{title}</p>
    <p className="icon" >{isOpen ? "-" : "+"}</p>
   {isOpen && <div className="content-box"> {text}</div>} 
    
  </div>);
}


