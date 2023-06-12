import './App.css';
import { Flex, Grid, Center, GridItem, Text} from '@chakra-ui/react'
import NavBar from './components/navbar';
import DataContext from "./context/DataContext";
import { useContext, useState,useEffect } from 'react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import ModalDrawer from './components/Modal';



function App() {
  let {lightMode, data } = useContext(DataContext)
  let [mode , setMode] = useState("123")

  let [top, setTop] = useState("")
  let[bottom ,setBottom] = useState("")


  function changeMode(){
    setMode(mode==="ABC"?"123":"ABC")
  }
  function handle(param){
    if(param==="."){
      if(bottom.includes(param)){
        
      }else{
        setBottom(prev=>prev+param)
        setTop(prev=>prev+param)
      }
    }
    else if(mode ==="ABC"){
      setBottom(prev=>prev+param)
      setTop(prev=>prev+data[param])
    }else{
      setBottom(prev=>prev+data[param])
      setTop(prev=>prev+param)
    }
  }
  function handleClear(param){
    if (param==="back"){
      setBottom(bottom.slice(0,-1))  
      setTop(top.slice(0,-1))
    }else{
      setBottom("")
      setTop("")
    }
  }
  return (
    <Flex w="100%" h="100svh"  justify="center" align="center" bg="white">
      <Flex maxW="480px" w="100%" maxH="896px" h="100%" direction="column" >
        <NavBar />
        <Flex direction="column" justify="space-between" h="100%" bg={lightMode?"":"#1a202c"}>
          <Flex h="35%" direction="column" justify={'flex-end'} align={'flex-end'} overflow="hidden">
            <Text fontSize="40px" color={lightMode?'gray.400':"gray.500"}>{top}</Text>
            <Text fontSize="75px">{bottom}</Text>
          <ModalDrawer />
          </Flex>
          <Flex h={[400,450]}>
            <Flex w="75%" bg={lightMode?"#ebf0fa":"#0f1726"} borderTopLeftRadius="15px" >
              <Grid templateColumns='repeat(3, 1fr)' w="100%" gap="1rem" p="3%" >
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("1")} borderRadius="20px">{mode ==="123"?"1":data["1"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("2")} borderRadius="20px">{mode ==="123"?"2":data["2"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("3")} borderRadius="20px">{mode ==="123"?"3":data["3"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("4")} borderRadius="20px">{mode ==="123"?"4":data["4"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("5")} borderRadius="20px">{mode ==="123"?"5":data["5"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("6")} borderRadius="20px">{mode ==="123"?"6":data["6"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("7")} borderRadius="20px">{mode ==="123"?"7":data["7"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("8")} borderRadius="20px">{mode ==="123"?"8":data["8"]}</Center>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("9")} borderRadius="20px">{mode ==="123"?"9":data["9"]}</Center>
                {/* <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" borderRadius="20px" onClick={changeMode}>{mode ==="ABC"?"123":"ABC"}</Center> */}
                <GridItem colSpan={2}>
                  <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle("0")} borderRadius="20px" >{mode ==="123"?"0":data["0"]}</Center>
                </GridItem>
                <Center className={lightMode? "bttn-light":"bttn-dark"} h="100%" onClick={()=>handle(".")} borderRadius="20px">.</Center>
              </Grid>
            </Flex>
            <Flex borderTopRightRadius="15px" w="25%" bg={lightMode?"#ebf0fa":"#0f1726"} gap="1rem" p="2%" direction="column" justify="space-evenly" fontSize="25px" fontWeight="500">
              {/* <Center bg="white" borderRadius="20px" h="20%">/</Center> */}
              <Center className={lightMode? "bttn-light":"bttn-dark"} h="30%" borderRadius="20px" onClick={changeMode}>{mode ==="ABC"?"123":"ABC"}</Center>
              <Center className={lightMode? "bttn-light":"bttn-dark"} borderRadius="20px" h="30%" onClick={()=>handleClear("clear")}>CE</Center>

              <Center className={lightMode? "bttn-back-light":"bttn-back-dark"} borderRadius="20px" h="40%" onClick={()=>handleClear("back")}><ArrowLeftIcon/></Center>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* {!data?<ModalDrawer data={true}/>:""} */}
    </Flex>
  );
}

export default App;
