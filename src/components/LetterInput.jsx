import Letter from "./Letter"

const options = [
    { value: 4, label: 'Max Length: 4 ~ 0.08 sec' },
    { value: 5, label: 'Max Length: 5 ~ 0.28 sec' },
    { value: 6, label: 'Max Length: 6 ~ 1.8 sec' },
    { value: 7, label: 'Max Length: 7 ~ 13 sec' },
    { value: 8, label: 'Max Length: 8 ~ 75 sec' },
    { value: 9, label: 'Max Length: 9 ~ 10 min' },
  ];

export default function LetterInput({solve, changeLetters, setCenter, letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter1Class, letter2Class, letter3Class, letter4Class, letter5Class, letter6Class, letter7Class, setMaxLen}){
    return(
        <>
            <input onChange={changeLetters} type="text" className="letter-input" minLength="7" maxLength="7"></input>
            <div className="letter-container">
                <Letter letter={letter1} onClick={setCenter} className={letter1Class}/>
                <Letter letter={letter2} onClick={setCenter} className={letter2Class}/>
                <Letter letter={letter3} onClick={setCenter} className={letter3Class}/>
                <Letter letter={letter4} onClick={setCenter} className={letter4Class}/>
                <Letter letter={letter5} onClick={setCenter} className={letter5Class}/>
                <Letter letter={letter6} onClick={setCenter} className={letter6Class}/>
                <Letter letter={letter7} onClick={setCenter} className={letter7Class}/>
            </div>
            <div className="letter-container">
                <button onClick={solve} className="solve-btn">Solve</button>
            </div>
        </>
    )
}