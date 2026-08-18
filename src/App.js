import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

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
    </div>
  );
}

export default App;
