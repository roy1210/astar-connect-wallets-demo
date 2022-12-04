import { web3Enable } from '@polkadot/extension-dapp';
import { SupportWallet } from '../../config/wallet';
import { LOCAL_STORAGE } from '../../config/localstorage';

export const getInjectedExtensions = async (forceRequest = false): Promise<any[]> => {
  const selectedAddress = localStorage.getItem(LOCAL_STORAGE.SELECTED_ADDRESS);
  if (selectedAddress != null || forceRequest) {
    let extensions = await web3Enable('AstarNetwork/astar-apps');

    // const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // Memo: Firefox takes some time to load the wallet extensions at the boot time.
    // Below code is for reference
    // if (isFirefox) {
    //   const injectedWeb3 = window.injectedWeb3;
    //   const numWalletExtensions = injectedWeb3 ? Object.values(window.injectedWeb3).length : 0;
    //   const maxRetry = 20;
    //   let numRetry = 0;
    //   while (extensions.length !== numWalletExtensions) {
    //     wait(400);
    //     extensions = await web3Enable('AstarNetwork/astar-apps');
    //     numRetry++;
    //     if (numRetry > maxRetry) {
    //       break;
    //     }
    //   }
    // }

    return extensions;
  }
  return [];
};

export const isMobileDevice =
  'ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/);

export const castMobileSource = (source: string): string => {
  if (isMobileDevice) {
    // Memo: source as 'polkadot-js' in mobile app
    const polkadotJsWallets = [SupportWallet.Math, SupportWallet.Nova];
    if (polkadotJsWallets.find((it) => it === source)) {
      return SupportWallet.PolkadotJs;
    }
  }
  return source;
};
