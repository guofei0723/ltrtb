import React, { useCallback, useEffect, useState } from 'react'
import cns from 'classnames'

export default () => {
  const [color, setColor] = useState<string | undefined>(undefined)
  const onClick = useCallback(() => {
    chrome.storage.sync.get('color', function(data: any) {
      setColor(data.color)
    })
  }, [])

  useEffect(() => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs: any) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: `document.body.style.background = '${color}'`})
    })
  }, [color])

  return (
    <div className='w-40 p-2 bg-gray-100 text-center'>
      <h1 className='mb-2'>Edit Popup.tsx to Modify</h1>
      <button
        className={cns(
          'p-1 text-center text-gray-100 border rounded w-2/3',
          color ? 'bg-white' : ' bg-gray-500 hover:bg-gray-600',
        )}
        style={{
          color
        }}
        onClick={onClick}
      >
        {color || 'hit me'}
      </button>
    </div>
  )
}
