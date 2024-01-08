import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import '../css/button.css';
import './styles/creatingSecondaryConstruction.css';
import FirstColumn from './components/firstColumn';
import SecondColumn from './components/secondColumn';

class CreatingSecondaryConstruction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfTheWork: '',
      selectedWords: [],
    };
  }

  saveWorkRecord = () => {
    console.log('Nome da Obra: ', this.state.nameOfTheWork);
    console.log('Palavras Selecionadas: ', this.state.selectedWords);
  };

  handleWordSelect = (word) => {
    if (!this.state.selectedWords.includes(word)) {
      this.setState((prevState) => ({
        selectedWords: [...prevState.selectedWords, word],
      }), () => {
        console.log('Palavras Selecionadas Atualizadas:', this.state.selectedWords);
      });
    }
  };

 handleWordRemove = (index) => {
    const updatedSelectedWords = [...this.state.selectedWords];
    updatedSelectedWords.splice(index, 1);
    this.setState({ selectedWords: updatedSelectedWords }, () => {
      console.log('Palavras Selecionadas Atualizadas:', this.state.selectedWords);
    });
  };

  render() {
    return (
      <div className='container' style={{ marginTop: '80px' }}>
        <div className='row'>
          <div className="col-md-12 mx-auto d-flex align-items-center">
            <Card title='Nova Obra' style={{ width: '80%', margin: 'auto'}}>

              <div className="row">
                <div className="col-md-5 step_combo">
                  <FirstColumn onWordSelect={this.handleWordSelect} />
                </div>
                <div className="col-md-5 step_combo">
                  <SecondColumn
                    selectedWords={this.state.selectedWords}
                    onWordRemove={this.handleWordRemove}
                  />
                </div>
              </div>
                <button onClick={this.saveWorkRecord} type="button" className="btn btn-primary">
                                Salvar e ir para o último passo
                </button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatingSecondaryConstruction;
