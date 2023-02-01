import { Container } from "react-bootstrap";
import DatesCounts from "./Components/DatesCount";
import DatesList from "./Components/DatesList";
import DatesAction from "./Components/DatesAction";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const person = [
    { id: "1", name: "مروة", date: "1 مساء", img: "p1.png" },
    { id: "2", name: "اسراء", date: "2 مساء", img: "p1.png" },
    { id: "3", name: "ايمان", date: "3 مساء", img: "p1.png" },
    { id: "4", name: "على", date: "4 مساء", img: "p1.png" },
    { id: "5", name: "محمد", date: "5 مساء", img: "p1.png" }
  ];
  const [data, setdata] = useState(person)
  const ondelete = ()=>{
    setdata([])
  }
  const onview = ()=>{
    setdata(person)
  }
  useEffect(()=>{
    setdata([])
  }, [])
  return (
    <div className="font">
      <Container className="py-4">
        <DatesCounts person={data}/>
        <DatesList person={data}/>
        <DatesAction deletedata={ondelete} viewdata={onview}/>
      </Container>
    </div>
  );
}

export default App;
