import { useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState(
    [
      "Learn React hooks",
      "Practice JavaScript problems",
      "Read 10 pages of a book",
      "Workout for 30 minutes",
      "Call parents"
    ]
  );


  function changeHandler(e) {
    setNewTask(e.target.value);
  }

  function addNewitem() {
    setTasks(prev => [...prev, newTask]);
  }

  function deleteItem(taskname) {
    let afterDeletingTasks = tasks.filter(eachitem => eachitem != taskname)
    setTasks(afterDeletingTasks);
  }

  function editItem(index, updatedTask) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  }

  return (
    <div className='main-body'>
      <Container>
        <Row>
          <Col xs={4} className='m-auto todos-card'>

            <div>
              <h2 className='mt-4 mb-4 heading'>My Todolist</h2>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <div class="form-floating">
                  <input type="text" className="form-control" id="floatingInput" placeholder=".." onChange={changeHandler} />
                  <label htmlFor="floatingInput">Task Name</label>
                </div>
                <button className='btn btn-sm btn-primary add-taskbtn' onClick={addNewitem}>+</button>
              </div>
              {
                tasks.map((task, index) =>
                  <TaskItem taskname={task}
                    deleteItem={deleteItem}
                    editItem={editItem} />
                )
              }

            </div>

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App
