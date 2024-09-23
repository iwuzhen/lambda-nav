import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Container, Flex, Text, Link, useColorModeValue, Card, CardBody, CardHeader, Heading, TagLabel, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


import {
  Link as RouterLink,
} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
  component: PageIndex,
})


const indexTree = [
  {
    title: "Academic Publications",
    search: {
      origin: ['Academic Publications'],
      title: "Academic Publications",
    },
  },
  {
    title: "Wikipedia",
    search: {
      tags: ['Wikipedia'],
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
    title: "Patents",
    search: {
      origin: ['Patents'],
      title: "Patents",
    },
  },
  {
    title: "Code",
    search: {
      tags: ['Github'],
      title: "Code",
    },
  },
  {
    title: "Other",
    search: {
      origin: ['Others'],
      title: "Other",
    },
  },
]

const categories = [
  {
    name: '数据图表', links: [
      { title: '销售数据', url: '/sales' },
      { title: '用户增长', url: '/user-growth' },
      { title: '市场份额', url: '/market-share' },
    ]
  },
  {
    name: '财务报告', links: [
      { title: '季度报告', url: '/quarterly-report' },
      { title: '年度预算', url: '/annual-budget' },
    ]
  },
  {
    name: '项目管理', links: [
      { title: '甘特图', url: '/gantt-chart' },
      { title: '任务看板', url: '/task-board' },
    ]
  },
];


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
        {/* <Container boxShadow="lg" variant="elevated" rounded='lg' p="5" maxW="98%" mt="20">
          <Text fontSize="4xl"> Data Source</Text>
          <Flex align="center" justify="center" >
            {
              indexTree.map((item, index) => (
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' m="5">

                  <Heading size='md' my='2'>
                    <LinkOverlay as={RouterLink} to="/page"
                      search={item.search}
                    >
                      {item.title}
                    </LinkOverlay>
                  </Heading>
                  <Text>

                  </Text>
                </LinkBox>
              ))
            }
          </Flex>
        </Container> */}

      </Container>
    </>
  )
}
