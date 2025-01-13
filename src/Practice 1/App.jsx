export const userdata={
  firstname: 'Abhinav',
  lastname: 'Singh',
  title: 'student',
}

export function User(){
  return(
    <div id="user" data-testid="user">
      <h2>{userdata.firstname} {userdata.lastname}</h2>
      <p>{userdata.title}</p>
    </div>
  );
}

function App(){
  return(
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! you got this💪</p>
      <User />
    </div>
  );
}

export default App;