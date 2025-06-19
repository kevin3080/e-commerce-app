import { useState } from 'react'
import { Button } from '@/components/button'
import { Typography } from '@/components/typography'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          size="medium"
          className="button_blue"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography variant="p" className="custom-class">
          Edit <code style={{ fontSize: '2em' }}>src/App.tsx</code> and save to
          test HMR
        </Typography>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Counter
