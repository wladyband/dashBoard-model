import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import '../css/button.css';
import './styles/creatingSecondaryConstruction.css'

class CreatingSecondaryConstruction extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
         nameOfTheWork: '',
        propertyOwner: '',
        zipCode: '',
        cityNeighborhood: '',
        city: '',
        cityStatus: '',
        cityAddress: '',
        addressNumber: '',
        complement: '',
        selectedOption: 'Orçamento',
    };
  }

    saveWorkRecord = () =>{
        console.log('Nome da Obra: ', this.state.nameOfTheWork)
        console.log('Nome do Proprietário: ', this.state.propertyOwner)
        console.log('CEP: ', this.state.zipCode)
        console.log('Endereo da cidade: ', this.state.cityAddress)
        console.log('Bairro da cidade: ', this.state.cityNeighborhood)
        console.log('Nome da cidade: ', this.state.city)
        console.log('Estado da cidade: ', this.state.cityStatus)
        console.log('Número do endereço: ', this.state.addressNumber)
        console.log('Complemento: ', this.state.complement)
        console.log('Tipo de obra selecionado:', this.state.selectedOption);
    }


   handleOptionChange = (event, component) => {
        this.setState({
            selectedOption: event.target.value,
        });
    };

  render() {
    return (
      <div className='container' style={{ marginTop: '80px' }}>
        <div className='row'>
          <div className="col-md-12 mx-auto d-flex align-items-center">
            <Card title='Nova Obra' style={{ width: '80%', margin: 'auto'}}>
              <div className="row">
                <div className='col-lg-12'>
                  <p style={{ textAlign: 'justify' }}>A conclusão do formulário ocorre em dois passos. Todos os campos assinalados com um asterisco são obrigatórios, incluindo a seleção do avatar. No entanto, vale ressaltar que a CONFIGURAÇÃO DA OBRA não é obrigatória.</p>
                </div>
              </div>
              <div className="row">
                <div className='col-lg-6'>
                  <button type="button" className="btn btn-dark" >INFORMAÇÕES SOBRE A OBRA</button>
                </div>
                <div className='col-lg-6'>
                  <button type="button" className="btn btn-light">CONFIGURAÇÃO DA OBRA</button>
                </div>
              </div>
               <div className="row">
                <div className='col-lg-4 step_combo'>
                  caixa 1
                </div>
                <div className='col-lg-4 step_combo'>
                  caixa 2
                </div>
              </div>
              <button onClick={this.saveWorkRecord} type="button" className="btn btn-primary">
                                Finalizar configuração da obra
                </button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatingSecondaryConstruction;
