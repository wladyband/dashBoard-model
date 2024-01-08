import React from 'react';

const wordsWithIcons = [
  { word: 'Maçã' },
  { word: 'Banana' },
  { word: 'Pera' },
];

function FirstColumn({ onWordSelect }) {
  return (
    <div className="column text_step_combo">
       <span style={{ marginBottom: '10px' }}>Todas as etapas</span>
      <ul className='list-unstyled'>
        {wordsWithIcons.map(({ word, icon }) => (
          <li key={word} onClick={() => onWordSelect(word)}>
            <span>{word}</span>
              <i className={`bi bi-patch-check`} style={{ marginLeft: '5px' }}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FirstColumn;
