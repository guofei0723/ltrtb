/**
 * chrome扩展的后台脚本
 */

console.log('this is the background script of extension')

chrome.runtime.onInstalled.addListener(function() {
  // 初始化配置信息
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

});
