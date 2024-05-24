import { createRoot } from 'react-dom/client';
import { ToDoList } from './pages/HomePage';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<ToDoList />);
