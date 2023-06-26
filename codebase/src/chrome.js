/* eslint-disable no-undef */

export const getChromeStorage = () => {
    return new Promise((resolve, reject) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        resolve(chrome.storage);
      } else {
        reject(new Error('Chrome storage API is not available.'));
      }
    });
  };
  