import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import '../css/button.css';

class RegisterUser extends React.Component {
  render() {
    return (
      <div className='container'  style={{ marginTop: '80px' }}>
        <div className='row'>
            <div className="col-md-6 mx-auto d-flex">
                 <Card title='Cadastro de Usuários' style={{ width: '80rem'}}>
                    <div className="text-left">
                         <div className="row">
                            <div className='col-lg-12'>
                                <fieldset>
                                      <FormGroup label="Nome: *" htmlFor="">
                                        <input type="nome" name="" 
                                        id="" 
                                        className="form-control" 
                                        />
                                      </FormGroup>
                                      <FormGroup label="Email: *" htmlFor="">
                                        <input type="email" name="" 
                                        id="" 
                                        className="form-control" 
                                        />
                                      </FormGroup>
                                      <FormGroup label="Senha: *" htmlFor="">
                                        <input type="password" name="" 
                                        id="" 
                                        className="form-control" 
                                        />
                                      </FormGroup>
                                      <FormGroup label="Repite a senha: *" htmlFor="">
                                        <input type="inputRepeatPassword" name="" 
                                        id="" 
                                        className="form-control"  
                                        />
                                      </FormGroup>
                                      <button type="button" className="btn btn-primary">
                                          Salvar
                                      </button>
                                      <button type="button" className="btn btn-danger">
                                          Cancelar
                                      </button>
                                  </fieldset>
                              </div> 
                        </div>
                    </div>
                 </Card>
            </div>
        </div>
      </div>
    );
  }
}

export default RegisterUser;