import { useState,useEffect } from "react"

const PostsForm = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState("");
   
    const handleSubmitPost = (e) => {
     e.preventDefault();
   
     if(post){
       //subir post al arreglo
       setPosts([...posts,post]);
       setPost("");
     }
    };
   
    const handleInputChange = (event ) => {
     setPost(event.target.value);
    };
   
    const handleDeletePost = (index) => {
     const newPosts = posts.filter((_,i)=> i !== index)
     setPosts(newPosts);
    };
   
     return (
       <>
       <form
       className="flex w-full justify-between gap-4 px-5 items-center border-b border-gray-500 py-3 " 
       onSubmit={handleSubmitPost}>
        <img
        className="w-14 h-14 rounded-full" 
        src=" https://unavatar.io/x/nmixxpics_" alt="icon" />
         <input
        className="bg-transparent focus: outline-none "
        type="text" 
         placeholder="Escribre algo" 
         value={post}
         onChange={handleInputChange}/>

         <input  className="text-lg bg-sky-400 w-24 h-9 rounded-2xl hover:bg-sky-600" type="submit" value={"Post"}/>

       </form>
       <section>
       {posts.map((item,index)=>(
         <div 
         className="flex w-full justify-between gap-4 px-5 items-center border-b border-gray-500 py-3 " 
         key={index}>
          <img
        className="w-14 h-14 rounded-full" 
        src=" https://unavatar.io/x/nmixxpics_" alt="icon" />
        <section className="w-full text-lg">
          <span className="font-bold">viccat</span>
          <span className="opacity-35">@viccat57</span>
        <p>{item}</p>
        </section>
           <button 
           className="text-lg bg-red-500 w-24 h-9 rounded-2xl hover:bg-red-600"
           onClick={()=>handleDeletePost(index)}>Borrar</button>
         </div>
       ))}
       </section>
       </>
     )
  }

  export {PostsForm}