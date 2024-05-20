import { useState } from 'react'
import './App.css'
import SpellingBeeHelper from './spelling-bee-solver'
import LetterInput from './components/LetterInput';


//spellingBeeHelper.solve(["o","a","m","n","t","x","y"]);


function App() {
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");
  const [letter6, setLetter6] = useState("");
  const [letter7, setLetter7] = useState("");
  const [center, setCenter] = useState(0);
  const [letter1Class, setLetter1Class] = useState("yellow-btn");
  const [letter2Class, setLetter2Class] = useState("gray-btn");
  const [letter3Class, setLetter3Class] = useState("gray-btn");
  const [letter4Class, setLetter4Class] = useState("gray-btn");
  const [letter5Class, setLetter5Class] = useState("gray-btn");
  const [letter6Class, setLetter6Class] = useState("gray-btn");
  const [letter7Class, setLetter7Class] = useState("gray-btn");
  const [solutions, setSolutions] = useState("");

  let spellingBeeHelper = new SpellingBeeHelper();

  function changeLetters(e){
    e.preventDefault()
    deleteNonAlph(e);
    const letters = document.querySelector(".letter-input").value + "       ";
    setLetter1(letters[0]);
    setLetter2(letters[1]);
    setLetter3(letters[2]);
    setLetter4(letters[3]);
    setLetter5(letters[4]);
    setLetter6(letters[5]);
    setLetter7(letters[6]);
  }

  function deleteNonAlph(e){
    e.preventDefault();
    let regex = /^[a-zA-Z]+$/;
    let newString = ""
    for (let i = 0; i < e.target.value.length; i++){
        if (regex.test(e.target.value[i]) && !newString.includes(e.target.value[i].toUpperCase())){
          newString += e.target.value[i].toUpperCase()
        }
    }
    e.target.value = newString;
  }

  function newCenter(e){
    e.preventDefault();
    const center = e.target.innerHTML;
    setLetter1Class("gray-btn");
    setLetter2Class("gray-btn");
    setLetter3Class("gray-btn");
    setLetter4Class("gray-btn");
    setLetter5Class("gray-btn");
    setLetter6Class("gray-btn");
    setLetter7Class("gray-btn");
    if (center == letter1){
      setCenter(0);
      setLetter1Class("yellow-btn");
    }
    else if (center == letter2){
      setCenter(1);
      setLetter2Class("yellow-btn");
    }
    else if (center == letter3){
      setCenter(2);
      setLetter3Class("yellow-btn");
    }
    else if (center == letter4){
      setCenter(3);
      setLetter4Class("yellow-btn");
    }
    else if (center == letter5){
      setCenter(4);
      setLetter5Class("yellow-btn");
    }
    else if (center == letter6){
      setCenter(5);
      setLetter6Class("yellow-btn");
    }
    else if (center == letter7){
      setCenter(6);
      setLetter7Class("yellow-btn");
    }
  }

  function solve(){
    spellingBeeHelper.solve([letter1.toLowerCase(), letter2.toLowerCase(), letter3.toLowerCase(), letter4.toLowerCase(), letter5.toLowerCase(), letter6.toLowerCase(), letter7.toLowerCase()], center, setSolutions);
  }

  return (
    <>
      <LetterInput solve={solve} changeLetters={changeLetters} setCenter={newCenter} letter1={letter1} letter2={letter2} letter3={letter3} letter4={letter4} letter5={letter5} letter6={letter6} letter7={letter7} letter1Class={letter1Class} letter2Class={letter2Class} letter3Class={letter3Class} letter4Class={letter4Class} letter5Class={letter5Class} letter6Class={letter6Class} letter7Class={letter7Class}/>
      <p>{solutions}</p>
    </>
  )
}

export default App
