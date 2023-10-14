import React from 'react';
import {ReactComponent as Send} from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';


const PhotoCommentsForm = ({ id }) => {
    const [comment, setComment] = React.useState('');
    const {request, error} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = (id, {comment});
        request(url, options)
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
   </form>
   
  );
};

export default PhotoCommentsForm;
