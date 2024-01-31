const trimTitle = (str)=>{
   return str.length > 30 ? `${str.slice(0,28)}...` : str
}

export default trimTitle;