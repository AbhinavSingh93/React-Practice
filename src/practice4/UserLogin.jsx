import LogButton from "./logbutton";
export const user={
  email: '',
  password:'',
  loggedIn:false,
};
function App(){
  function Handlelogin(){
    user.email='abhinavsingh18813@gmail.com';
    user.password='Abhi';
    user.loggedIn=true;
    console.log('User updated:', user);
  }
  return (
     <div id="app">
      <h1>User Login</h1>
      <h3>Email</h3>
      <input type="text" name="enter email"></input>
      <h3>Password</h3>
      <input type="text" name="enter Pass"></input>
      <LogButton onSelect={Handlelogin}>Login</LogButton>
     </div>
  );
}

export default App;