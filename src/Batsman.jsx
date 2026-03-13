import { useState } from "react"

export default function Batsman ({name}) {
    const [runs, setRuns] = useState(0);

    const handleSingles = () => {
        const newRuns = runs + 1;
        setRuns(newRuns);
    }

    const handleDoubles = () => {
        const newRuns = runs + 2;
        setRuns(newRuns);
    }

    const handleFours = () => {
        const newRuns = runs + 4;
        setRuns(newRuns);
    }

    const handleSix = () => {
        const newRuns = runs + 6;
        setRuns(newRuns);
    }

    return (
        <div>
            {
                runs > 50 && <p>Congrats! you've got half century</p>
            }
            <h3>Player: {name}</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>1</button>
            <button onClick={handleDoubles}>2</button>
            <button onClick={handleFours}>4</button>
            <button onClick={handleSix}>6</button>
        </div>
    )
}