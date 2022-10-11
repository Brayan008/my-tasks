import './App.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Notes from './pages/Notes';


function App() {
  return (
    <>
    <div class="container-fluid">
        <div class="row">
          <Notes></Notes>
        </div>
    </div>
    </>
  );
}

export default App;
