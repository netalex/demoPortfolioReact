import './App.module.css';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/UI/card/Card';
import ImageBar from './components/imageBar/ImageBar';
import ShowData from './components/showdata/ShowData';
import ButtonBar from './components/buttonBar/ButtonBar';

function App() {
  return (
   <Wrapper>
     <Card>
       <ImageBar />
       <ShowData />
       <ButtonBar />
     </Card>
   </Wrapper>
  );
}

export default App;
