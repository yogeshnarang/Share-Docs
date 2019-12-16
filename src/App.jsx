// eslint-disable-next-line
import React from 'react'
import Table from './components/Table'
import Header from './components/Header'


const App = () =>
  (<div>
    <div>
      
      <Header />
    </div>  
      <div style={{ width: 'max-content' }}>
        <Table x={100} y={100} id={'1'} />
      </div>
    </div>)

export default App
