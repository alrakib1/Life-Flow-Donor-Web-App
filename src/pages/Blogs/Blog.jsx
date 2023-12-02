import { Link } from "react-router-dom";


const Blog = ({blog}) => {
   
 
    return (
       <div>
        <div className="card card-compact max-w-[326px] bg-base-100 shadow-xl">
            <figure className="pt-5 flex justify-center max-w-[326px] max-h-[155px] mx-auto "><img src={blog.image} alt="blog-image" /></figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.content}</p>
              <div className="card-actions justify-center">
               <Link to={`/details/${blog._id}`}> <button className="btn btn-primary">Details</button></Link>
              </div>
            </div>
          </div>
 
       </div>
    );
};

export default Blog;