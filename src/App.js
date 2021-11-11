import {useEffect, useState} from "react";
import './App.module.css';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/UI/card/Card';
import ImageBar from './components/imageBar/ImageBar';
import ShowData from './components/showdata/ShowData';
import ButtonBar from './components/buttonBar/ButtonBar';
import data from './asset/dummyData.json';

/**
 * 0 - name
 * 1 - email
 * 2 - birthday
 * 3 - address
 * 4 - phone
 * 5 - password
 */

function App() {
  const [sectionSelected, setSectionSelected] = useState(null);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const iconNames = [
    "far fa-user",
    "far fa-envelope",
    "far fa-calendar-alt",
    "fas fa-map-marked-alt",
    "fas fa-phone-alt",
    "fas fa-lock"
  ];
  const user = data.results[0];
  useEffect(()=>{
    let text = "";
    let value = "";
    switch (sectionSelected) {
      case 0:
        setText('Hello! My name is');
        setValue(`${user.name.title} ${user.name.first} ${user.name.last}`);
        break;
      case 1:
        setText('My Email address is');
        setValue(`${user.email}`);
        break;
      case 2:
        setText('My birthday date is');
        setValue(new Date(user.dob.date).toLocaleDateString());
        break;
        case 3:
        setText('My Address is');
        setValue(`${user.location.street.number}, ${user.location.street.name}`);
        break;
      case 4:
        setText('My phone number is');
        setValue(user.phone); // TODO: format string (xx) - xx - xx - xx
        break;
      case 5:
        setText('My password is');
        setValue(user.login.password);
        break;
    
      default:
        break;
    }
  });
  const getButton = (e) => {console.log(e); setSectionSelected(e);};
  return (
   <Wrapper>
     <Card>
       <ImageBar imgpath={user.picture.large} />
       <ShowData text={text} value={value}/>
       <ButtonBar onGetButton={getButton} iconNames={iconNames}/>
     </Card>
   </Wrapper>
  );
}

export default App;
