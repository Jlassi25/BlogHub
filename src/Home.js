import BlogList from "./blogList";
import useFetch from "./useFtech";

const Home = () => {
const {data : blogs , ispending,err} = useFetch("http://localhost:9000/blogs");
 
    return ( 
        <div className="home">
         { err && <div>{err}</div>}
         {ispending && <div> Loading ....</div>}
          { blogs && <BlogList blogs={blogs} title="All Blogs !" />}
          {/*  <BlogList blogs={blogs.filter(blog => blog.author === 'mario') } title="Mario's Blogs !"/> */}
        </div>
     );
}
 
export default Home;