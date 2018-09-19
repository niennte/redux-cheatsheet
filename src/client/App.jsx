import React from 'react';
import AddTodo from './container/AddTodo';
import VisibleTodoList from './container/VisibleTodoList';
import Footer from './component/Footer';

const AppTodo = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default AppTodo;
