/* eslint-disable import/prefer-default-export */
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 程序入口
 * @param App
 */
export const runApp = (App: React.FC, rootId = 'root') => {
  let root = document.getElementById(rootId)
  if (!root) {
    root = document.createElement('div')
    root.setAttribute('id', rootId)
    document.body.insertBefore(root, document.body.firstChild)
  }

  ReactDOM.render(
    React.createElement(App),
    root,
  )
}
