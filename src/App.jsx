
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusebleForm from './components/ReusebleForm/ReusebleForm'

// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import RefForm from './components/RefForm/RefForm'

// import Hook from './Hooks/Hook'
function App() {

  // const handleSingUpSubmit =data => {
  //  console.log('sing up data ',data);

  // }
  // const handleUpdateSubmit = data => {
  // console.log(  'update profile',data);

  // }

  return (
    <>
{/* 
      <h1>Form Master</h1>
      <ReusebleForm 
      formTitle={'Sing Up'} 
      handleSubmit={handleSingUpSubmit}
       submitBtnText='Sing Up'>
       </ReusebleForm>
      <ReusebleForm
       handleSubmit={handleUpdateSubmit}
        formTitle={'Profile Update'} 
        submitBtnText='Update'>

        </ReusebleForm>

      {/* <Hook></Hook> */}
      {/* <RefForm></RefForm> */}
      <br />
      {/* <StatefulForm></StatefulForm> */} 

<Grandpa></Grandpa>
    </>
  )
}

export default App
