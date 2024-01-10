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
      selectedWork: [],
    };
  }

  saveWorkRecord = () => {
    console.log('Nome da Obra: ', this.state.nameOfTheWork);
    console.log('Palavras Selecionadas: ', this.state.selectedWork);
  };

  handleWorkSelect = (word) => {
    if (!this.state.selectedWork.includes(word)) {
      this.setState((prevState) => ({
        selectedWork: [...prevState.selectedWork, word],
      }), () => {
        console.log('Palavras Selecionadas Atualizadas:', this.state.selectedWork);
      });
    }
  };

 handleWorkRemove = (index) => {
    const updatedSelectedWords = [...this.state.selectedWork];
    updatedSelectedWords.splice(index, 1);
    this.setState({ selectedWork: updatedSelectedWords }, () => {
      console.log('Palavras Selecionadas Atualizadas:', this.state.selectedWork);
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
                  <FirstColumn onWorkSelect={this.handleWorkSelect} />
                </div>
                <div className="col-md-5 step_combo">
                  <SecondColumn
                    selectedWork={this.state.selectedWork}
                    onWorkRemove={this.handleWorkRemove}
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
