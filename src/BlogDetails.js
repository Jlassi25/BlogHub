import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFtech";

const BlogDetails = () => {

    const { id } = useParams()
    const {data:blog,err,ispending} = useFetch("http://localhost:9000/blogs/"+id)
    const history = useHistory()

    const handleDelete=()=>{
      fetch("http://localhost:9000/blogs/"+id,{
        method:'DELETE'
      }).then(()=>{
        history.push('/');
      })
    }
    return ( 
        <div className="blog-details">
        { ispending && <div>Loading...</div> }
        { err && <div>{ err }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
     );
}
 
export default BlogDetails;