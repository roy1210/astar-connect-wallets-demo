import { isMobileDevice } from './../utils/wallet/index';
import { computed, reactive, ref, watch, WatchCallback, watchEffect, watchPostEffect } from 'vue';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { useExtensions } from './useExtensions';
import { useTodoStore } from '../store/wallet';
import { storeToRefs } from 'pinia';

export const useTodo = () => {
  const state = reactive({ newTodoLabel: '' });

  // useTodoStore を呼び出すだけで、グローバルストアへのアクセスが可能
  const store = useTodoStore();

  // ストア内の State や Getters はリアクティブオブジェクトなので、
  // リアクティブを失わずに取り出す場合は storeToRefs を用いる
  const { filteredTodos, filter } = storeToRefs(store);

  const toggleTodo = (id: number) => store.toggleTodo(id);
  const addTodo = () => {
    if (state.newTodoLabel !== '') {
      store.addTodo(state.newTodoLabel);
      state.newTodoLabel = '';
    }
  };

  // watchEffect(() => {
  //   console.log('useTodo');
  //   console.log('filteredTodos', filteredTodos.value);
  //   console.log('finish');
  // });

  watch(
    [filteredTodos],
    () => {
      console.log('useTodo');
      console.log('filteredTodos', filteredTodos.value);
      console.log('finish');
    },
    { immediate: true }
  );

  return { filteredTodos, state, filter, toggleTodo, addTodo };
};
