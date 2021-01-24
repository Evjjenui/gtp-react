import React, {useState} from "react";
import { Remarkable } from "remarkable";
  
function Markdown () {
  const [htmlText, setHtmlText] = useState('');
  const md = new Remarkable();

  function getRawMarkup() {
    return { __html: md.render(htmlText) };
  };

  return (
    <div>
      <textarea
        onChange = { (e) => setHtmlText(e.target.value) }
        defaultValue = { htmlText }>
      </textarea>
      <div dangerouslySetInnerHTML={ getRawMarkup() } />
    </div>
  );
}

export default Markdown;
