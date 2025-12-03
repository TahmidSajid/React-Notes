import { useEffect, useState } from 'react'
import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';
import './App.css'

function App() {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  let {users, isLoading, error}       = useFetch('https://jsonplaceholder.typicode.com/users');
  let [searchedUser, setSearchedUser] = useState(users);

  useEffect(()=>{
    setSearchedUser(users);
  },[users])

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    var filteredUsers = searchedUser.filter((user) => {
      return user.id != id
    });
    setSearchedUser(filteredUsers);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    if(searchText){
      console.log(searchText);
      var searchedUsers = users.filter((user) => {
        var searchKey = searchText.toLowerCase();
        return user.name.toLowerCase().startsWith(searchKey);
      });
      setSearchedUser(searchedUsers);
    }
    else{
      setSearchedUser(users);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Users Management App</h1>
        {isLoading && <p>Loading users...</p>}
        {error && <p>{error}</p>}
        {/* Needs to pass functions from here for state lifting  */}
        <Search onHandleSearch={handleSearch} />
        {searchedUser.length > 0 &&<Users users={searchedUser} onHandleDeleteUser={handleDeleteUser}/>}
      </div>
    </>
  )
}

export default App
