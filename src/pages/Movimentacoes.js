import React from 'react'

import Rest from '../utils/rest'

const baseUrl = 'https://mymony-react.firebaseio.com/'

const { useGet } = Rest(baseUrl)

const Movimentacoes = (props) => {
    // fazendo uma requisição de movimentações
    const data = useGet(`movimentacoes/${props.match.params.data}`)
    return (
        <div>
          <h1>Movimentações</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              { data.data &&
                Object.keys(data.data)
                      .map(mov => { // mapeando mov para renderizar na tabela 
                          return (
                             <tr>
                                <td>{data.data[mov].descricao}</td>
                                <td>{data.data[mov].valor}</td>
                             </tr> 
                          )
                      }) 
              }
            </tbody>
          </table>
        </div>
    ) 
}

export default Movimentacoes