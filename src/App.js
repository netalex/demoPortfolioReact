import './App.module.css';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/UI/card/Card';
import ImageBar from './components/imageBar/ImageBar';
import ShowData from './components/showdata/ShowData';

function App() {
  return (
   <Wrapper>
     <Card>
       <ImageBar />
       <ShowData />
     </Card>
   </Wrapper>
  );
}

export default App;
