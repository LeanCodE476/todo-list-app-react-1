import './App.css';
import ListaTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="App">
      <div className='container-todo-list'>
        <h1>Tus Tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
