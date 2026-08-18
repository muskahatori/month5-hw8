
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EchoInput = () => {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Вы ввели: {text === '' ? 'пустую строку' : text}</p>
      <p>Количество символов: {text.length}</p>

      <button onClick={() => setText('')}>Очистить</button>
      <button onClick={() => navigate('/')}>На главную</button>
    </div>
  )
}

export default EchoInput
