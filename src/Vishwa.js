import Student from './Vishwa1'
function App() {
const details={sname:"Abc",rnum:20,mt1:24,mt2:20}
const details1={sname:"Def",rnum:21,mt1:19,mt2:21}
const details2={sname:"Def",rnum:21,mt1:19,mt2:21}
const details3={sname:"Def",rnum:21,mt1:19,mt2:21}

  return ( 
    <div className="App">
    <Student data={details}/>
    <Student data={details1}/>
    <Student data={details2}/>
    <Student data={details3}/>
    </div>
  );
}
export default App;

