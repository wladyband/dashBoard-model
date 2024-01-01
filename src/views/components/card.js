import React from 'react';


class Card extends React.Component {
  render() {
    return (
      <div className="card d-flex align-items-center" style={{ width: '28rem' }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          {this.props.children}
        </div>
      </div>
    );
  }
}



export default Card;