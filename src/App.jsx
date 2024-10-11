import { PostsForm } from "./components/PostsForm"


function App() {

  return (
    <>
    <div className="h-screen text-2xl border-x border-gray-500 w-2/5">
    <section className="flex w-full text-lg border-b border-gray-500">
      <div className="w-1/2 p-2 flex  font-bold justify-center hover:bg-neutral-900">For you</div>
      <div className="w-1/2 p-2  font-bold flex justify-center hover:bg-neutral-900">following</div>
    </section> 
    <PostsForm/>
    </div>
    </>
  )
}

export default App
