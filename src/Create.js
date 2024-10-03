import {useState} from "react";
// import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // let data = new FormData(e.target)
        // console.log(data.get('title'));
        const blog = { title, body, author};
        setIsPending(true);
        // const {data: blog1, isPending, error} = useFetch("http://localhost:8084/blogs");
        fetch("http://localhost:8084/blogs",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(data => {
            if (!data.ok) {
                throw new Error(`Mon HTTP error! status: ${data.status}`);
            }
            console.log(data);
            setTitle('');
            setBody('');
            setAuthor('');
            setIsPending(false)
            // navigate(-1);
            // navigate('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog body:</label>
                <textarea required name="body" value={body} onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <label>Blog author:</label>
                <select name="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button disabled type="submit">Adding Blog....</button>}
            </form>
        </div>
    )
}

export default Create;