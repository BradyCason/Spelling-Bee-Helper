export default function Letter({letter, onClick, className}){
    return(
        <div>
            <button onClick={onClick} className={"hexagon " + className}>{letter}</button>
        </div>
    )
}