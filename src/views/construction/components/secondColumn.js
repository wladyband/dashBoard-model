import React from 'react';

function SecondColumn({ selectedWords, onWordRemove }) {
  return (
    <div className="column text_step_combo">
      <span >Etapas da obra</span>   
      <ul className='list-unstyled'>
        {selectedWords.map((word, index) => (
          <li key={index} onClick={() => onWordRemove(index)}>
           <span>{word}</span>
              <i className={`bi bi-patch-minus-fill`} style={{ marginLeft: '5px' }}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondColumn;
