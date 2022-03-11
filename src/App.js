import './App.css';
import FunctionalComponent from './component/Functional';
import ClassComponent from './component/Class';
import ImageSlider from './ImageSlider';
function App() {
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent/>
      <ImageSlider/>
    </div>
  );
}

export default App;
