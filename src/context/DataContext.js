import {createContext, useState} from "react"
import { useColorMode, useDisclosure } from "@chakra-ui/react";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({children}) => {

  const { colorMode, toggleColorMode } = useColorMode()
  let lightMode = colorMode ==="light"? true:false

  let [data, setData] = useState(localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):null
    // "0":"M","1":"B","2":"J","3":"H","4":"G","5":"F","6":"Q","7":"S","8":"D","9":"A"
    // "0":null,"1":null,"2":"","3":null,"4":null,"5":null,"6":null,"7":null,"8":null,"9":null
  )

  let { isOpen, onOpen, onClose } = useDisclosure()


  const contextData = {
    lightMode:lightMode, toggleColorMode:toggleColorMode,
    // moed:mode , setMode:setMode,
    data:data, setData:setData,

    onItOpen:onOpen ,isItOpen:isOpen, onClose:onClose,
  }
  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  )
}