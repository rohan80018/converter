import {  Flex, Center } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"



export default function Toogle({lightMode, toggleColorMode}){
  return (
    <>
      <Flex onClick={toggleColorMode}  bg={lightMode ? "white": "#293242"} width="40px" borderRadius='12px' height="25px" align="center"p="1px" justify={lightMode? "flex-start":"flex-end"}>
        <Center bg={lightMode?"#586987":"#e6e1e1"}   borderRadius="50%" w="20px" h="100%">
          {lightMode ?<SunIcon  color={"whiteAlpha.800"}/>:
            <MoonIcon  color={"blackAlpha.500"}/>}
        </Center> 
      </Flex>
    </>
      
  )
}