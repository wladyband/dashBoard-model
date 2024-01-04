import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import '../css/button.css';

class CreatingPrimaryConstruction extends React.Component {
  
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
                <div className='col-lg-4' style={{ margin: '10px'}}>
                  <label htmlFor="">Escolha o tipo de obra</label>
                </div>
                <div className='col-lg-2' style={{ margin: '10px' }}>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="constructionType"
                        value="Orçamento"
                        checked={this.state.selectedOption === 'Orçamento'}
                        onChange={(event) => this.handleOptionChange(event, event.target)}
                      />
                      Orçamento
                    </label>
                  </div>
                </div>
                <div className='col-lg-2' style={{ margin: '10px' }}>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="constructionType"
                        value="Ativa"
                        checked={this.state.selectedOption === 'Ativa'}
                        onChange={this.handleOptionChange}
                      />
                      Ativa
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className='col-lg-4' >
                   <FormGroup label="Nome da Obra: *" htmlFor="">
                              <input type="text"
                              value={this.state.nameOfTheWork}
                              onChange={(e) => this.setState({ nameOfTheWork: e.target.value })}
                              id="inputNameOfTheWork" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
                <div className='col-lg-3' style={{ margin: '1.8%'}}>
                    <button type="button" className="btn btn-dark" style={{ width: '100%' }}>
                                Selecionar o Avatar
                    </button>
                </div>
              </div>
               <div className="row">
                <div className='col-lg-4' style={{ marginRight: '2.0%'}}>
                   <FormGroup label="Proprietário:" htmlFor="" >
                              <input type="text"
                              value={this.state.propertyOwner}
                              onChange={(e) => this.setState({ propertyOwner : e.target.value })}  
                              id="inputPropertyOwner" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
                <div className='col-lg-6'>
                    {/* <FormGroup label="Email:" htmlFor="">
                              <input type="email" name="" 
                              id="" 
                              className="form-control" 
                              />
                    </FormGroup> */}
                </div>
              </div>
              <div className="row">
                <div className='col-lg-4' style={{ marginRight: '2.0%'}}>
                   <FormGroup label="CEP:" htmlFor="" >
                              <input type="text" 
                              value={this.state.zipCode}
                              onChange={(e) => this.setState({ zipCode : e.target.value })}   
                              id="inputZipCode" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
                  <div className='col-lg-4' style={{ marginRight: '2.0%'}}>
                   <FormGroup label="Bairro:" htmlFor="" >
                              <input type="text" 
                              value={this.state.cityNeighborhood}
                              onChange={(e) => this.setState({ cityNeighborhood : e.target.value })}    
                              id="inputCityNeighborhood" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className='col-lg-4' style={{ marginRight: '2.0%'}}>
                   <FormGroup label="Cidade:" htmlFor="" >
                              <input type="text" 
                              value={this.state.city}
                              onChange={(e) => this.setState({ city : e.target.value })} 
                              id="inputCity" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
                  <div className='col-lg-4' style={{ marginRight: '2.0%'}}>
                   <FormGroup label="Estado:" htmlFor="" >
                              <input type="text" 
                              value={this.state.cityStatus}
                              onChange={(e) => this.setState({ cityStatus : e.target.value })} 
                              id="inputCityStatus" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className='col-lg-6' style={{ marginRight: '2.0%'}}>
                   <FormGroup label="Endereço:" htmlFor="" >
                              <input type="text" 
                              value={this.state.cityAddress}
                              onChange={(e) => this.setState({ cityAddress : e.target.value })}  
                              id="inputCityAddress" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
                <div className='col-lg-4'>
                    <FormGroup label="Número:" htmlFor="" >
                              <input type="text" 
                              value={this.state.addressNumber}
                              onChange={(e) => this.setState({ addressNumber : e.target.value })}  
                              id="inputAddressNumber" 
                              className="form-control" 
                              />
                    </FormGroup>
                </div>
              </div>
             <div className="row">
                <div className='col-lg-6'>
                    <FormGroup label="Complemento:" htmlFor="" >
                              <input type="text" 
                              value={this.state.complement}
                              onChange={(e) => this.setState({ complement : e.target.value })}  
                              id="inputComplement" 
                              className="form-control" 
                              />
                    </FormGroup>
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

export default CreatingPrimaryConstruction;
