import React, { useMemo, useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostFilters from "./components/PostFilters";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css'

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'какая то шняга'},
        {id: 2, title: 'React', body: 'пока сложно'},
        {id: 3, title: 'Django', body: 'ваще не юзаю лол'}
    ])
  
    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }
    
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


  return (
    <div className="App">
      <MyButton style ={{marginTop: "30px"}}onClick={()=>setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visivle={modal} setVisivle={setModal}>
        <PostForm create={createPost}/>
        
      </MyModal>
      <hr style={{margin: "15px 0"}}/>
      <PostFilters 
        filter={filter} 
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Web-лол"/>
        :
        <h1 style={{textAlign: "center"}}>
          Посты не найдены
        </h1>
      }
    </div>
  );
};

export default App;
