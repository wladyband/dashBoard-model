import React from 'react';

const workWithIcons = [
  { work: 'Paredes e Painés' },
  { work: 'Cobertura' },
  { work: 'Esquadrias' },
  { work: 'Elétrica' },
  { work: 'Hidráulica' },
  { work: 'Louças e Metais' },
  { work: 'Sistemas' },
];

// No componente FirstColumn
function FirstColumn({ onWorkSelect }) {
  return (
    <div className="column text_step_combo">
      <span style={{ marginBottom: '10px' }}>Todas as etapas</span>
      <ul className='list-unstyled'>
        {workWithIcons.map(({ work, icon }) => (
          <li key={work} onClick={() => onWorkSelect(work)}>
            <span>{work}</span>
            <i className={`bi bi-patch-check`} style={{ marginLeft: '5px' }}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default FirstColumn;
