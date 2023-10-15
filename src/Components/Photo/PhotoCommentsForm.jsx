import React from 'react';
import {ReactComponent as Send} from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../api';


const PhotoCommentsForm = ({ id, setComments }) => {
    const [comment, setComment] = React.useState('');
    const {request, error} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST (id, { comment });
    const { response, json } = await request(url, options);
    console.log();
    if(response.ok) {
      setComment('');
      setComments((comments)  => [...comments, json]);
    }
    }

  return (
   <form onSubmit={handleSubmit}>
        <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        />
        <button>
        <Send />
    </button>
    <Error error={error}/>
   </form>
   
  );
};

export default PhotoCommentsForm;
