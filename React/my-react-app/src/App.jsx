import Student from "./Student.jsx";

function App() {

  return(
    <>
      <Student name="Spongebob" age="hello" isStudent={true}/>
      <Student name="Patrick" age={35} isStudent={true}/>
      <Student name="Sandy" age={30} isStudent={false}/>
    </>
  );
}

export default App
