import { use } from "react";
import Name from "./Name";

export default function UserName ({userNamePromise}) {
    const userName = use(userNamePromise);
    
    return(
        <div>
            <h1>Names : {userName.length}</h1>
            {
                userName.map(name => <Name key={name.id} name={name}></Name>)
            }
        </div>
    )
}