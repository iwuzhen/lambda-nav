import { Box, Container, Flex, Text, Link, useColorModeValue } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


import {
  Link as RouterLink,
} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
  component: PageIndex,
})


const indexTree = [
  {
    title: "Paper",
    search: {
      origin: ['paper'],
      title: "Paper",
    },
  },
  {
    title: "Wikipedia",
    search: {
      tags: ['wikipedia'],
      title: "Wikipedia",
    },
  },
  {
    title: "Encyclopædia Britannica",
    search: {
      origin: ['Encyclopædia Britannica'],
      title: "Encyclopædia Britannica",
    },
  },
  {
    title: "Patent",
    search: {
      origin: ['patent'],
      title: "Patent",
    },
  },
  {
    title: "Code",
    search: {
      tags: ['github'],
      title: "Code",
    },
  },
  {
    title: "Other",
    search: {
      origin: ['other'],
      title: "Other",
    },
  },
]


function PageIndex() {
  const bg_o = useColorModeValue('gray.200', 'gray.400')
  const bg_e = useColorModeValue('gray.100', 'gray.500')

  return (
    <>
      <Container maxW="full" p={0}>
        {
          indexTree.map((item, index) => (
            <Flex key={item.title} align="center" justify="center" bg={index % 2 == 0 ? bg_o : bg_e}>
              <Link p={12} m={4} as={RouterLink}
                to="/page"
                search={item.search}>
                <Text fontSize="8xl"> {item.title} </Text>
              </Link>
            </Flex>
          ))
        }
      </Container>
    </>
  )
}
