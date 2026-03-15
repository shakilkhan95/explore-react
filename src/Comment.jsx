export default function Comment ({com}){
    const {name, email, body} = com;
    return(
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    )
}