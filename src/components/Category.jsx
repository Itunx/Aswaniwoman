import React from 'react'
import "../styles.css";
import cat from "../images/cat.jpg"
import catt from "../images/catt.jpg"
import pex from "../images/pex.jpg"
import men from "../images/men.jpg"
import mama from "../images/mama.jpg"
import classic from "../images/classic.jpg"
import Button from './Button';
import Footer from './Footer'
const Category = () => {
  return (
    <>
    <div className='ml-20'>
        <div className='md:m-9 flex items-center j
        ustify-center' id='one'>
            <div className='mr-9 pr-9 m-6'><img src={cat}></img></div>
            <div className='mr-9 pr-9 m-6'><img src={men}></img></div>
            <div className='mr-9 pr-9 m-6'><img src={catt}></img></div>
            <div className='mr-9 pr-9 m-6'><img src={men}></img></div>
        </div>
        <div className='m-9 flex items-center justify-center' id='two'>
            <div className='mr-9 pr-9 m-6'><img src={classic}></img></div>
            <div className='mr-9 pr-9 m-6'><img src={mama}></img></div>
            <div className='mr-9 pr-9 m-6'><img src={cat}></img></div>
            <div className='mr-9 pr-9 m-6'><img src={cat}></img></div>
        </div>
   
    </div>
       <div className="flex items-center justify-center h-screen" id='shopp'>
          <div id="shopper">
              <p className='text-4xl' id='wat'>What our shoppers are saying about us</p>
              <br/><br/>
              <p className='text-lg' id='package'>I received my package...Wow!. i'm so  impressed,the pants fit perfectly and the dress is<br/>
              wow!. I'm so speechless and so excited.Thank  you,i will definitely patronize you again </p>
                    <br/>
                  <div className='ada ml-10'>
                    <h4>Ada</h4><br/>
                      <p id='package'>London,United Kingdom</p>
        
                   </div>
                   
            </div>
       </div><br/><br/>
       <div  className="flex items-center justify-center h-screen">
        <div>
              <h2 id='packages' className='text-lg'>don’t miss that #StyleSteal</h2> 

              <p className='text-4xl' id="instagram"> Shop our instagram feed</p><br/><br/>
              <Button className='m-7 w-400'>Shop Instagram</Button>
            </div>
       </div>
         <br/>
         <br/>
         <Footer/>
    </>
    
  )
}

export default Category