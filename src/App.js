import React from 'react'
import useGet from './useGet'
import useDelete from './useDelete'
import usePost from './usePost'
import axios from 'axios'

const url = 'https://mymony-react.firebaseio.com/movimentacoes.json'


function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()
  
  const save = () => {
    post({valor: 10, descricao: 'ola'})
  }
  const doRemove = () => {
    remove('https://mymony-react.firebaseio.com/movimentacoes/-LsDuP9Mf4hIvifXpuQi.json')
  }
  return (
    <div>
      <h1>My Money</h1>
      { JSON.stringify(data)}
      { data.loading && <p>Carregando...</p>}
      <button onClick={save}>Salvar</button>
      <button onClick={doRemove}>Delete</button>
    </div>
  )
}

export default App
