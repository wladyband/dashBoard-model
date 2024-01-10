import React from 'react';

function SecondColumn({ selectedWork, onWorkRemove }) {
  return (
    <div className="column text_step_combo">
      <span >Etapas da obra</span>   
      <ul className='list-unstyled'>
        {selectedWork.map((work, index) => (
          <li key={index} onClick={() => onWorkRemove(index)}>
           <span>{work}</span>
              <i className={`bi bi-patch-minus-fill`} style={{ marginLeft: '5px' }}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondColumn;
