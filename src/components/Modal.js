import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Flex, Input, Grid, Button} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import ldb from 'localdata'


export default function ModalDrawer() {
  // let { isOpen, onOpen, onClose } = useDisclosure()
  

  let{isItOpen,  onClose, setData ,data,ldbdata} = useContext(DataContext)
  
  let empty = {
    "0":"","1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":""
  }
  
  let [change, setChange] = useState(data?data:empty)
  
  if(!Object.keys(data).length){
    // setTimeout(()=>{
    //   isItOpen=true
    // },500)
    isItOpen=true
  }
  console.log(data)

  useEffect(()=>{
    
    setChange(data)
  },[isItOpen])

  function handleChange(event){
    let{name, value} = event.target
    let arr = Object.values(change)
    setChange(prev=>{
      return{...prev,[name]:arr.includes(value.toUpperCase())?"":value.toUpperCase()}
    })
  }
  function saveData(){
    let arr = Object.values(change)
    if(!arr.includes("")){
      setData(change)
      // data = change
      localStorage.setItem("data",JSON.stringify(change))
      // ldb.set('data', change);
      onClose()
    }
  }
  return (  
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isItOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set your Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns='repeat(3, 1fr)' columnGap="3rem" rowGap="1rem">
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                0 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["0"]} name="0" />
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                1 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["1"]} name="1"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                2 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["2"]} name="2"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                3 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["3"]} name="3"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                4 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["4"]} name="4"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                5 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["5"]} name="5"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                6 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["6"]} name="6"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                7 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["7"]} name="7"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                8 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["8"]} name="8"/>
              </Flex>
              <Flex w="100%" justify={'space-evenly'} align={"center"} fontSize="18px">
                9 :
                <Input type="text" maxLength="1" w="50px" onChange={handleChange}  value={change["9"]} name="9"/>
              </Flex>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={saveData}>
              Save
            </Button>
            <Button variant='ghost' colorScheme='red' onClick={()=>setChange(empty)}>Clear</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}