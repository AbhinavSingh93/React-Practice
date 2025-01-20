function Summary({text}){
  return (
    <>
    <h1>Summary</h1>
    <p>{text}</p>
    </>
  )
}

function App(){
   return(
    <div data-testid="app">
    <Summary text="This is the summary content." />
  </div>
   );
}
export default App;