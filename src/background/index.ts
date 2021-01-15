/**
 * chrome扩展的后台脚本
 */

// eslint-disable-next-line no-console
console.log('this is the background script of extension')

chrome.runtime.onInstalled.addListener(() => {
  // 初始化配置信息
  chrome.storage.sync.set({ color: '#3aa757' }, () => {
    // eslint-disable-next-line no-console
    console.log('The color is green.');
  });
});
