import React from 'react';
import {
    Box,
    Flex,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    HStack,
    Image,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from "/assets/images/knogen-log.svg"

import {
    Link as RouterLink,
} from "@tanstack/react-router"

import navbarData from "./navbar.json"

type NavMenuItem = {
    title: string;
    id: string;
    to?: string;
    search?: any;
    children?: NavMenuItem[];
}

function MenuRender({ menuData }: { menuData: NavMenuItem[] }) {
    return (
        <>{
            menuData.map(item => {
                if (item.to)
                    return (
                        <Menu key={item.id}>
                            <RouterLink to={item.to}>
                                <MenuButton as={Button}
                                    transition='all 0.2s'
                                    borderRadius='md'
                                    bg="rgba(255, 255, 255, 0);"
                                    _hover={{
                                        textDecoration: 'none',
                                        bg: useColorModeValue('gray.500', 'gray.700'),
                                    }}
                                    _expanded={{ bg: 'gray.400' }}
                                    _focus={{ boxShadow: 'outline' }}
                                >
                                    {item.title}
                                </MenuButton>
                            </RouterLink>
                        </Menu >
                    )
                else return (
                    <Menu key={item.id}>
                        <MenuButton as={Button} variant='ghost'
                            transition='all 0.2s'
                            borderRadius='md'
                            // borderWidth='1px'
                            bg="rgba(255, 255, 255, 0);"
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.500', 'gray.700'),
                            }}
                            _expanded={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            {item.title}
                        </MenuButton>
                        <MenuList>
                            {item.children?.map(child => (
                                <MenuItem key={child.id} minH='48px' as={RouterLink} to={child.to} search={child.search} >
                                    <span>{child.title}</span>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu >
                )
            })


        }
        </>
    )
}
const NavBar: React.FC = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.400', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open navigation'}
                    display={['inherit', 'inherit', 'none']}
                    onClick={onToggle}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box><Link as={RouterLink} to="/"><Image
                        src={Logo}
                        alt="iwuzhen logo"
                        height="38px"
                        maxW="2xl"
                        alignSelf="center"
                    /></Link></Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {/* {['About', 'Contact', 'FAQ'].map((link) => (
                            <Link as={RouterLink}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.500', 'gray.700'),
                                }}
                                key={link}
                                to="/"
                            >
                                {link}
                            </Link>
                        ))}
                        <Link as={RouterLink}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.500', 'gray.700'),
                            }}
                            to="/explor"
                        >
                            Explorer
                        </Link> */}
                        <MenuRender menuData={navbarData} />
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <IconButton aria-label="chang color" icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} />
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={['inherit', 'inherit', 'none']}>
                    <HStack as={'nav'} spacing={4}>
                        {/* {['About', 'Contact', 'FAQ'].map((link) => (
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.500', 'gray.700'),
                                }}
                                key={link}
                                href={'#'}
                            >
                                {link}
                            </Link>
                        ))}
                        <Link as={RouterLink}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('gray.500', 'gray.700'),
                            }}
                            to="/explor"
                        >
                            Explorer
                        </Link> */}

                        <MenuRender menuData={navbarData} />
                    </HStack>
                </Box>
            ) : null}
        </Box>
    );
};

export default NavBar;