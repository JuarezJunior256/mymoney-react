import React from 'react'
import useGet from './UseGet'

const url = 'https://mymony-react.firebaseio.com/movimentacoes.json'

function App() {
  const data = useGet(url)
  return (
    <div>
      <h1>My Money</h1>
      { JSON.stringify(data)}
      { data.loading && <p>Carregando...</p>}
    </div>
  )
}

export default App
