import {useEffect, useState} from "react";
import "./App.module.css";
import Wrapper from "./components/wrapper/Wrapper";
import Card from "./components/UI/card/Card";
import ImageBar from "./components/imageBar/ImageBar";
import ShowData from "./components/showdata/ShowData";
import ButtonBar from "./components/buttonBar/ButtonBar";
import ServiceMessage from "./components/UI/serviceMessage/ServiceMessage";
import {URI} from "./constants/api";
import {TEXT} from "./constants/text";
import {iconNames} from "./constants/iconNames";

function App() {
  const [sectionSelected, setSectionSelected] = useState(null);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [pic, setPic] = useState("");
  const [dataLive, setDataLive] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAsync = async () => {
      setLoading(true);
      try {
        const res = await fetch(URI);
        const dataRes = await res.json();
        setDataLive(dataRes);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchAsync();
  }, []);

  useEffect(() => {
    setPic(dataLive?.results[0].picture.large);
    switch (sectionSelected) {
      case 0:
        setText(TEXT.NAME);
        setValue(
          `${dataLive?.results[0].name.title} ${dataLive?.results[0].name.first} ${dataLive?.results[0].name.last}`
        );
        break;
      case 1:
        setText(TEXT.EMAIL);
        setValue(`${dataLive?.results[0].email}`);
        break;
      case 2:
        setText(TEXT.BDAY);
        setValue(new Date(dataLive?.results[0].dob.date).toLocaleDateString());
        break;
      case 3:
        setText(TEXT.ADDRESS);
        setValue(
          `${dataLive?.results[0].location.street.number}, ${dataLive?.results[0].location.street.name}`
        );
        break;
      case 4:
        setText(TEXT.PHONE);
        /* knowing all the phone number's formats used by the API
         *  we can write a formatting function to normalize them */
        // const phone = dataLive?.results[0].phone.split("-");
        // const prefix = phone.shift();
        // setValue(`(${prefix})-${phone.join("-").toString()}`);
        setValue(`${dataLive?.results[0].phone}`);
        break;
      case 5:
        setText(TEXT.PWD);
        setValue(dataLive?.results[0].login.password);
        break;
      default:
        setText("");
        setValue("");
        break;
    }
  }, [sectionSelected, dataLive]);

  const getButton = (e) => {
    setSectionSelected(e);
  };

  return (
    <Wrapper>
      {!error && !loading && (
        <Card>
          <ImageBar imgpath={pic} />
          <ShowData text={text} value={value} />
          <ButtonBar onGetButton={getButton} iconNames={iconNames} />
        </Card>
      )}
      {error && (
        <Card>
          <ServiceMessage msg="ERRORE INTERNET!" type="error" />
        </Card>
      )}
      {loading && (
        <Card>
          <ServiceMessage msg="Wait for it..." type="wait" />
        </Card>
      )}
    </Wrapper>
  );
}

export default App;
