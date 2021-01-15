import React, { useEffect, useState } from 'react'

const bgColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

export default () => {
  const [color, setColor] = useState<string | undefined>()

  useEffect(() => {
    chrome.storage.sync.get('color', (data: any) => {
      setColor(data.color)
    })
  }, [])

  return (
    <div className="w-screen min-h-screen bg-gray-300" style={{ backgroundColor: color }}>
      <h1 className="container text-xl px-4 py-2">Options</h1>
      <p className="text-center">your options content</p>
      {bgColors.map((c) => (
        <button
          key={c}
          type="button"
          className="border rounded w-20 px-2 py-1 text-center text-white"
          style={{
            backgroundColor: c,
          }}
          onClick={() => {
            chrome.storage.sync.set({ color: c }, () => {
              setColor(c)
              // eslint-disable-next-line no-console
              console.log(`color is ${c}`);
            })
          }}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
