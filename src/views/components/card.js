import React from 'react';


class Card extends React.Component {
  render() {
    const { title, children, style } = this.props;

    const cardStyle = {
      width: '28rem',
      ...style, // Adiciona estilos personalizados, se fornecidos
    };
    return (
      <div className="card d-flex" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <hr/>
           </h5>
          {children}
        </div>
      </div>
    );
  }
}



export default Card;