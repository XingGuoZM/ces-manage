const userData = require('./mock.json');

const queryData=(ms:number=1000)=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(userData),ms);
  })
}


export {queryData}