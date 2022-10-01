import React,{useState} from 'react';
import './translator.css';
import translateForDisplay from './emoji-translate.js';

import pg2_bg_1 from '../../assets/pg2_bg-1.svg';
import pg2_bg_2 from '../../assets/pg2_bg-2.svg';

import EmojiTranslate from './emoji-translate.js'
window.EmojiTranslate = EmojiTranslate;

function Translator() {

  const [text, settext] = useState('');
  const [emoji, setemoji] = useState('');

  const [copy, setCopy] = useState(false);

  function copy_emoji(){
    setCopy(true);
    setTimeout(function(){
      setCopy(false);
    },2000);
    var textArea = document.createElement("textarea");
    textArea.value = emoji;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
  
  function updateOutput(e) {
    e.preventDefault();
    
    var output = document.getElementById('output');

    var allLines = text.split('\n');
      for (var line = 0; line < allLines.length; line++ ){
        if (allLines[line] == ''){
          continue
        }
          
        var words = allLines[line].split(' ');
        // Re-add the translated words.
        for (var i = 0; i < words.length; i++ ) {
            var node = EmojiTranslate.translateForDisplay(words[i]);
          if (node){
            output.appendChild(node);
          }
            
        }
          var newLine = document.createElement('br');
          output.appendChild(newLine);
      }

      var value = getActualOutput();
      setemoji(value);
      document.getElementById('output').innerHTML = '';
  }

  function getActualOutput() {
    var value = '';
    var nodes = document.getElementById('output').children;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].tagName === 'SELECT') {
        // Do this instead of .value because we want to maintain whitespace.
        value += nodes[i].options[nodes[i].selectedIndex].textContent;
      } else if (nodes[i].tagName === 'BR') {
        value += '\n';
      } else if (nodes[i].tagName != 'OPTION') {
        value += nodes[i].textContent;
      }
    }
    return value;
  }

  return (
    <>
      <div className='translator'>
        
      <img className='pg2_bg_1' src={pg2_bg_1} />
      <img className='pg2_bg_2' src={pg2_bg_2} />
        <div className="translator_inner">
          <div className='Enter-txt-container'><span>Text:</span></div> 
          <form onSubmit={(e) =>updateOutput(e)}>
            <textarea className='Enter-txt-textarea' name="" id="" cols="30" rows="10" placeholder='Enter text here!' onChange={(e) =>settext(e.target.value)}></textarea>
            <div className='translate-btn-container'>
              <div className='translate-btn' onClick={(e) =>updateOutput(e)}> 
                <span>translate</span>
              </div>
            </div>

          </form>
          
          <div className='Emoji-txt-container'><span>Emoji:</span> </div>
          <div className='Emoji-txt-textarea-container'>
            <div className='copy-container'>
              {!copy &&
                <i className="fa-regular fa-copy" onClick={(e) => copy_emoji()}></i>
              }
              {copy &&
                <i className="fa-solid fa-square-check"></i>
              }

            </div>
            <textarea className='Emoji-txt-textarea' name="" id="" cols="30" rows="10" placeholder='Copy your emoji here!' onChange={(e) => setemoji(e.target.value)} value={emoji}></textarea>
            <div className='output' id='output'></div>
          </div>
          
        </div>
      </div>


    </>
  )
}

export default Translator