import { isMobileDevice } from './../utils/wallet/index';
import { computed, ref, watch, WatchCallback, watchEffect, watchPostEffect } from 'vue';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { useExtensions } from './useExtensions';

const ASTR_DECIMALS = 18;
const astarEndpoint = 'wss://astar-rpc.dwellir.com';
let api: ApiPromise | undefined;

export const useConnectWallets = () => {
  // const api = ref<ApiPromise | null>(null);

  const connectApi = async () => {
    const provider = new WsProvider(astarEndpoint);
    const apiObj = new ApiPromise({
      provider,
    });

    await apiObj.isReady;
    api = apiObj;
    // const era = await api.value.query.dappsStaking.currentEra();
    // console.log('era', era.toString());

    // if (isMobileDevice) {
    const { extensions } = useExtensions(api);
    console.log('extensions', extensions);
    // }
  };

  // const { extensions } = useExtensions(api);

  watchEffect(async () => {
    console.log('hello');
    await connectApi();
  });

  return {};
};
