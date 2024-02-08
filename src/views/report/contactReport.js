import React from 'react';
import Card from '../components/card';
import { Bar } from 'react-chartjs-2';
import '../css/button.css';

class ContactReport extends React.Component {
  render() {
    const januaryData = {
      labels: ['Ligações', 'Marcações', 'Contatos WhatsApp', 'Redes Sociais', 'Google', 'Indicações'],
      values: [10, 20, 15, 25, 30, 12],
    };

    const barData = {
      labels: januaryData.labels,
      datasets: [
        {
          label: 'Quantidades',
          data: januaryData.values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return (
      <div className='container' style={{ marginTop: '80px' }}>
        <div className='row'>
          <div className="col-md-12 mx-auto d-flex align-items-center">
            <Card title='Relatório de Contatos' style={{ width: '80%', margin: 'auto'}}>
              <div className="row">
                <div className='col-lg-12'>
                  <p style={{ textAlign: 'justify' }}>Aqui está o relatório das quantidades de Ligações, Marcações, Contatos feitos pelo WhatsApp, Redes Sociais, Google e Indicações para o mês de Janeiro.</p>
                </div>
              </div>
              <div className="row">
                <div className='col-lg-12'>
                  <Bar data={barData} options={chartOptions} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactReport;
