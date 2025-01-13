function Header(){
  return(
     <header>
        <h1>TIME TO PRACTICE</h1>
        <p>One course,many goals! 🎯</p>
     </header>
  );
}

function CourseGoal(props){
  return(
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App(){
  return(
   <div data-testid="app">
    <section id="app">
     <Header />
     <main>
        <ul>
          <CourseGoal 
           title="Learn React"
           description="In-depth"
          />
          <CourseGoal 
           title="Practice"
           description="Practice working with React,components etc"
          />
        </ul>
        </main>
      </section>
   </div>
  );
}

export default App;