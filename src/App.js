import React, {useState} from 'react';
import './App.css';
import {marked} from 'marked';

export default function App() {
  const [markdown, setMarkdown]=useState("# suuup");
  return (
    <div className="app">
      <textarea onChange={(e) => setMarkdown(e.target.value) } 
      value={markdown}/>

      <div className="preview" dangerouslySetInnerHTML={{__html: marked.parse(markdown)}}/>
    </div>
  );
}
