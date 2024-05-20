import Letter from "./Letter"

export default function LetterInput({solve, changeLetters, setCenter, letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter1Class, letter2Class, letter3Class, letter4Class, letter5Class, letter6Class, letter7Class}){
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