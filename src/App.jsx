import { useState,useEffect } from "react"


function App() {
 const [posts, setPosts] = useState([]);
 const [post, setPost] = useState("");

 useEffect(()=>{
  console.log("componente cargado")
 },[posts]);

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
    <h1>clon twitter</h1>
    <form onSubmit={handleSubmitPost}>
      <input type="text" 
      placeholder="Escribre algo" 
      value={post}
      onChange={handleInputChange}/>
      <input type="submit" value={"Postear"}/>
    </form>
    <p>Actual post: {post}</p>
    <section>
    {posts.map((item,index)=>(
      <div key={index}>
        <p>{item}</p>
        <button onClick={()=>handleDeletePost(index)}>Borrar</button>
      </div>
    ))}
    </section>
    </>
  )
}

export default App
