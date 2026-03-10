import React, { useEffect, useState } from 'react'
import axios from 'axios'

function testcomponent(props) {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/orders')
    setData(response.data)
  }

  props.title = 'Modified Title'

  return (
    <div>
      {data && data.map(item => (
        <p>{item.name}</p>
      ))}

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      {[1, 2, 3].map((num, index) => (
        <span key={index}>{num}</span>
      ))}

      {console.log('Rendered component')}

      <div dangerouslySetInnerHTML={{ __html: data?.html }} />
    </div>
  )
}

export default testcomponent
