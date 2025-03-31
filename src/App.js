
import { useState } from 'react';
import './App.css';
import { upperCaseLetters, lowerCaseLetters, numbers, special } from './data';



function App() {
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(6);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const increaseCounter = (e) => {
    e.preventDefault();
    if (counter<20){
      setCounter((prevCounter) => prevCounter+1);
    }
  };
  
  const decreaseCounter = (e) => {
    e.preventDefault();
    if (counter>0){
      setCounter((prevCounter) => prevCounter-1);
    }
  };

  const generatePassword = (e) => {
    e.preventDefault();
    if (isUpperCase === false && isLowerCase===false && isNumber===false && isSymbol===false){
      alert("Please select atleast one type of character");
      return;
    }
    let _password = ""
    for(let i=0; i<counter;i++){
      _password += getRandom();
    }
    setPassword(_password);
  }

  const getRandom = () => {
    const chars = [];
    if(isUpperCase){
      chars.push(upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)]);
    }
    
    if(isLowerCase){
      chars.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]);
    }

    if(isNumber){
      chars.push(numbers[Math.floor(Math.random()*numbers.length)]);
    }

    if(isSymbol){
      chars.push(special[Math.floor(Math.random()*special.length)]);
    }

    if (chars.length === 0) return;

    return chars[Math.floor(Math.random()*chars.length)];
  };

  const createCopy = () => {
    const textareaE1 = document.createElement("textarea");
    textareaE1.innerText = password;
    document.body.appendChild(textareaE1);
    textareaE1.select();
    document.execCommand("copy");
    textareaE1.remove();
    alert("Copied the password to the clipboard");
  }

  const copyPassword=(e) => {
    e.preventDefault();
    createCopy();
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center text-neutral-950 bg-indigo-100'>
      <div className='w-[350px] bg-white shadow-lg rounded-2xl p-6'>
        <h2 className='text-center text-2xl mb-5'>Password generator</h2>
        <h4 className='text-center mb-5 bg-gray-100 text-xl font-semibold text-[#292e5a] px-4 py-2 rounded-lg border border-gray-300'>{password}</h4>
      

      <form className='generator__form'>
        <div className='generator__form-controls'>
          <div className='flex justify-between mb-2.5'>
            <label className="flex items-center gap-2" htmlFor='uppercase'>Uppercase</label>
            <input checked={isUpperCase}
            onChange={(e) => setIsUpperCase(e.target.checked)}
            className='accent-[#b2abff] scale-110' 
            type='checkbox' id='uppercase' 
            name='uppercase'></input>
          </div>
          <div className='flex justify-between mb-2.5'>
            <label htmlFor='lowercase'>Lowercase</label>
            <input checked={isLowerCase}
            onChange={(e) => setIsLowerCase(e.target.checked)}
             className='accent-[#b2abff]' 
             type='checkbox' id='lowercase' 
             name='lowercase'></input>
          </div>
          <div className='flex justify-between mb-2.5'>
            <label htmlFor='numbers'>Numbers</label>
            <input checked={isNumber}
            onChange={(e) => setIsNumber(e.target.checked)}
             className='accent-[#b2abff]' 
             type='checkbox' id='numbers' 
             name='numbers'></input>
          </div>
          <div className='flex justify-between mb-2.5'>
            <label htmlFor='symbols'>Symbols</label>
            <input checked={isSymbol}
            onChange={(e) => setIsSymbol(e.target.checked)}
             className='accent-[#b2abff]' 
             type='checkbox' id='symbols' 
             name='symbols'></input>
          </div>

          <div className='flex flex-col items-center justify-center my-7 p-4 rounded bg-indigo-100'>
            <h4 className='genrator__length-title'>Password length</h4>
            <div className='flex items-center justify-center gap-4 bg-[#e7eaf6] p-3 rounded-lg'>
              <button className="w-[35px] h-[35px] rounded-lg text-lg text-[20px] mx-2 text-white bg-[#292e5a] border border-[#292e5a] transition-all duration-200 cursor-pointer hover:text-[#292e5a] hover:bg-[#f3f3f3] hover:border-[#292e5a]" onClick={decreaseCounter}>-</button>
              <span className="inline-block text-[18px] w-[36px] text-center">{counter}</span>
              <button className="w-[35px] h-[35px] rounded-lg text-lg text-[20px] mx-2 text-white bg-[#292e5a] border border-[#292e5a] transition-all duration-200 cursor-pointer hover:text-[#292e5a] hover:bg-[#f3f3f3] hover:border-[#292e5a]" onClick={increaseCounter}>+</button>
            </div>
          </div>

          <div className='flex gap-6 justify-around'>
            <button className='px-3 py-2 text-[#292e5a] border-none rounded cursor-pointer bg-gradient-to-r from-[#a0c0ff] to-[#b2abff]' onClick={generatePassword}>Generate Password</button>
            <button className='px-3 py-2 text-[#292e5a] border-none rounded cursor-pointer bg-gradient-to-r from-[#62f4] to-[#b2abff]' onClick={copyPassword}>Copy Password</button>
          </div>
        </div>
      </form>

      <h2 className='mt-3 text-center'>Developed by Priya Garg</h2>
      </div>
    </div>
  );
}

export default App;
