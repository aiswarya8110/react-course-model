const trimTitle = (str)=>{
   return str.length > 40 ? `${str.slice(0,33)}...` : str
}

export default trimTitle;