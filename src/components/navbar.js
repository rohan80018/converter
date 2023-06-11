import { Flex, IconButton, useDisclosure, Button } from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import Toogle from "./toogle"
import { useContext, useRef } from "react"
import DataContext from "../context/DataContext"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'



export default function NavBar(){
  let {lightMode , toggleColorMode, onItOpen} = useContext(DataContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()


  return(
    <Flex bg={lightMode?"#ccddfc":"#0f1726"} w="100%" h="2rem" justifyContent={"space-between"} p="0 2%" align="center">

      <IconButton
      bg="transparent"
        _hover={{bg:lightMode?"white":"#1a202c", borderRadius:"25px"}}
        aria-label='Call Segun'
        icon={<HamburgerIcon color={lightMode?"black":"white"} />}
        ref={btnRef} onClick={onOpen}
      />
      <Toogle lightMode={lightMode} toggleColorMode={toggleColorMode} />
      
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Converter</DrawerHeader>

          <DrawerBody>
            <Button onClick={onItOpen}>Change Data</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
    </Flex>
  )
}