import React from 'react'
import "../styles.css";

const Contact = () => {

   const [FormData, setFormDta]= React.useState({

        firstName:"",
        lastName:"",
        email:"",
        occupation:"",
        message:"",
        male:true,
          })
          console.log(FormData)
          
           function handleChange(event){
            const{name,value,type,checked}=event.target
            setFormDta(prev=>{
                return{
                    ...prev,
                    [name]:type=="checkbox" ? checked : value
                }
            })

           }
  return (
    <div>
        <h1>Aswani customer info</h1>
        <p>Tailored cloth suited to your design</p>
        <form>
            <div>
                <label htmlFor='male'male>male</label>
                <input type='checkbox' id='male' checked={FormData.male}></input>
            </div>
            <div>
            <input type='text' name='firstName' placeholder='firstname' className='mx-4' onChange={handleChange} value={FormData.firstName}/>
             <input type='text' name='lastName' placeholder='lastname' className='' onChange={handleChange} value={FormData.lastName}/>
            </div>
            <div className='my-4'>
            <input type='text' name='email' placeholder='email' className='mx-4' onChange={handleChange} value={FormData.email}/>
             <input type='text' name='occupation' placeholder='occupation' className='' onChange={handleChange} value={FormData.occupation}/>
            </div>
    <div>
        <textarea value={FormData.message} id="feo" onChange={handleChange} name='message' />
    </div>
        </form>
      
    </div>
  )
}

export default Contact