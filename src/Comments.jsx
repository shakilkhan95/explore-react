import { use } from "react";
import Comment from './Comment';

export default function Comments ({commentsPromise}) {
    const comments = use(commentsPromise);
    return(
        <div>
            <h3>Comments: </h3>
            {
                comments.map(com => <Comment key={com.id} com={com}></Comment>)
            }
        </div>
    )
}