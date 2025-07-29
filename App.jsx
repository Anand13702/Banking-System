import { useState ,useEffect} from 'react'


import './App.css'

function App() {
  const [name, setName] = useState("")
  const [initial, setInitial] = useState()
  const [deposit, setDeposit] = useState()
  const [withdrawn, setWithdrawn] = useState()
  const [acc, setAcc] = useState()
  const [click,setClick]=useState()
const Submit=()=> setClick(10000+Number(deposit)-Number(withdrawn))

  
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleInitial=(e)=>setInitial(e.target.value)
  const handleDeposit=(e)=>setDeposit(e.target.value)
  const handleWithdrawn=(e)=>setWithdrawn(e.target.value)
  const handleAcc=(e)=>setAcc(e.target.value)
  //const Submit=()=>(10000+Number(deposit)-Number(withdrawn))
 // useEffect(() => {
    
 // const Submit=()=>(10000+Number(deposit)-Number(withdrawn))
 
    
 // }, [handleDeposit, handleInitial,handleWithdrawn])
  

  return (
    <>
     <div className="container">
      
       <label htmlFor="enter your name :">Enter name</label>
      <input type="text" 
      placeholder='enter your name'
      value={name}
       onChange={handleName}
     
      />
      <br />
       <label >Enter your Account Number</label>
      <input type="text" 
      placeholder='enter your acc_num'
      value={acc}
      onChange={handleAcc}
    
   
     required
      />
       <label htmlFor="">Initial Amount :</label>
      <input type="number" 
      placeholder='initial amount'
      value={10000}
       onChange={handleInitial}
   
     required
      />
       <label htmlFor=":">enter your Deposit Amount< /label>
      <input type="number" 
      placeholder=' deposit'
      value={deposit}
       onChange={handleDeposit}
    
    required
     
      />
       <label htmlFor="">enter your withdrawal Amount :</label>
      <input type="number" 
      placeholder=' withdrawal'
      value={withdrawn}
      onChange={handleWithdrawn}
      required
    
      />
      <br />
      <button className="btn"
    onClick={Submit}
      >
button
      </button>
     <h1 color='white'>Hello     {name}</h1>
     <h3>You deposit:
      <br />
      {deposit}</h3>
     <h3>Your total balance is {click}</h3>
     </div>
  
    </>
  )
}

export default App
