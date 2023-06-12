import {createContext, useEffect, useState} from "react"
import { useColorMode, useDisclosure } from "@chakra-ui/react";
import ldb from 'localdata'

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({children}) => {

  const { colorMode, toggleColorMode } = useColorMode()
  let lightMode = colorMode ==="light"? true:false

  let [data, setData] = useState(localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):{}
    // "0":"M","1":"B","2":"J","3":"H","4":"G","5":"F","6":"Q","7":"S","8":"D","9":"A"
    // "0":null,"1":null,"2":"","3":null,"4":null,"5":null,"6":null,"7":null,"8":null,"9":null
  )
  
  // console.log(ldbdata)
  // let [data, setData] = useState({}
  //   // "0":"M","1":"B","2":"J","3":"H","4":"G","5":"F","6":"Q","7":"S","8":"D","9":"A"
  //   // "0":null,"1":null,"2":"","3":null,"4":null,"5":null,"6":null,"7":null,"8":null,"9":null
  // )
  // let [setData] = useState({})
  // let data = {}
  // ldb.get("data",(value)=>{console.log(data =value)})
  // setTimeout(()=>{
  //   // setData(d?d:{})
    
  // },500)
  // console.log(d)
 
  // setData(ldbdata?ldbdata:{})
  // console.log(ldbdata)
  // useEffect(()=>{
  //   setData(ldbdata?ldbdata:{})
  // },[])

  let { isOpen, onOpen, onClose } = useDisclosure()


  const contextData = {
    lightMode:lightMode, toggleColorMode:toggleColorMode,
    // moed:mode , setMode:setMode,
    data:data, setData:setData,

    onItOpen:onOpen ,isItOpen:isOpen, onClose:onClose,

    // ldbdata:ldbdata
  }
  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  )
}