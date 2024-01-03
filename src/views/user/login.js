import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import '../css/button.css'

class Login extends React.Component {
  render() {
    return (
      <div className='container'  style={{ marginTop: '80px' }}>
        <div className='row'>
        <div className="col-md-6 mx-auto d-flex align-items-center">
            <Card title='Login'>
               <div className="row">
                   <div className='col-lg-12'>
                     
                        <fieldset>
                            <FormGroup label="Email: *" htmlFor="">
                              <input type="email" name="" 
                              id="" 
                              className="form-control" 
                              placeholder="Digite o Email" 
                              />
                            </FormGroup>
                            <FormGroup label="Password: *" htmlFor="">
                              <input type="password" name="" 
                              id="" 
                              className="form-control" 
                              placeholder="Digite a senha" 
                              />
                            </FormGroup>
                            <button type="button" className="btn btn-primary">
                                Entrar
                            </button>
                            <button type="button" className="btn btn-danger">
                                Cadastrar
                            </button>
                        </fieldset>
                    </div> 
               </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;