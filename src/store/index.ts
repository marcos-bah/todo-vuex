import { createStore } from 'vuex';
import { IToDo } from '@/Interfaces/IToDo';

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})



export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: 'Criar mais ToDo',
        description: 'Criar novos items no ToDo',
        isCompleted: false,
      }
    ] as IToDo[],
    localTodo: {
      id: 0,
      title: '',
      description: '',
      isCompleted: false,
    } as IToDo,
  },
  mutations: {
    addTodo(state, todo: IToDo) {
      state.todos.push(todo);
    },
    removeTodo(state, todo: IToDo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    updateTodo(state, todo: IToDo) {
      const index = state.todos.findIndex(t => t.id === todo.id);
      state.todos[index] = todo;
    },
    initLocalTodo(state, id: number) {
      const index = state.todos.findIndex(t => t.id === id);
      state.localTodo = state.todos[index];
    },
    setLocalTodo(state, todo: IToDo) {
      state.localTodo = todo;
    },
    setLocalTodoId(state, id: number) {
      state.localTodo.id = id;
    },
    setLocalTodoTitle(state, title: string) {
      state.localTodo.title = title;
    },
    setLocalTodoDescription(state, description: string) {
      state.localTodo.description = description;
    },
    setLocalTodoIsCompleted(state, isCompleted: boolean) {
      state.localTodo.isCompleted = isCompleted;
    },
    clearLocalTodo(state) {
      state.localTodo = {
        id: 0,
        title: '',
        description: '',
        isCompleted: false,
      } as IToDo;
    }
  },
  actions: {
    addTodo({ commit }, todo: IToDo) {
      commit('addTodo', todo);
    },
    removeTodo({ commit }, todo: IToDo) {
      commit('removeTodo', todo);
    },
    updateTodo({ commit }, todo: IToDo) {
      commit('updateTodo', todo);
    },
    setLocalTodo({ commit }, todo: IToDo) {
      commit('setLocalTodo', todo);
    },
    setLocalTodoId({ commit }, id: number) {
      commit('setLocalTodoId', id);
    },
    setLocalTodoTitle({ commit }, title: string) {
      commit('setLocalTodoTitle', title);
    },
    setLocalTodoDescription({ commit }, description: string) {
      commit('setLocalTodoDescription', description);
    },
    setLocalTodoIsCompleted({ commit }, isCompleted: boolean) {
      commit('setLocalTodoIsCompleted', isCompleted);
    },
    clearLocalTodo({ commit }) {
      commit('clearLocalTodo');
    }
  },
  plugins: [vuexLocal.plugin]
});
