export default function Assignment ({number, marks = 'Under review'}) {
    return (
        <div>
            <h1>Assignment: {number}</h1>
            <p>Marks: {marks}</p>
        </div>
    )
}