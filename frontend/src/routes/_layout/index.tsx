import { Container, Flex, Text, Link, useColorModeValue } from "@chakra-ui/react"
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
    describe: "利用MAG、OpenAlex、arXiv等学术数据库中的论文和引文数据，我们进行了深入的多维度统计分析，涵盖了全球数十年的研究文献。分析结果揭示了论文发表数量的变化趋势，各国在学术领域的排名，以及不同国家在特定学术领域的相对实力。",
    search: {
      origin: ['Academic Publications'],
      title: "Academic Publications",
    },
  },
  {
    title: "Wikipedia",
    describe: "通过分析 Wikipedia 词条的版本更新、相互链接以及分类变化，我们可以揭示学科间的联系，并追踪它们的发展趋势。",
    search: {
      tags: ['Wikipedia'],
      title: "Wikipedia",
    },
  },
  {
    title: "Encyclopædia Britannica",
    describe: "大英百科全书，作为世界知名且权威的信息宝库，蕴藏着众多引人入胜的知识。",
    search: {
      origin: ['Encyclopædia Britannica'],
      title: "Encyclopædia Britannica",
    },
  },
  {
    title: "Patents",
    describe: "全球专利数据揭示了各国在不同时期的发展趋势。",
    search: {
      origin: ['Patents'],
      title: "Patents",
    },
  },
  {
    title: "Code",
    describe: "开源代码统计揭示了各国信息技术发展动态。",
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

// const categories = [
//   {
//     name: '数据图表', links: [
//       { title: '销售数据', url: '/sales' },
//       { title: '用户增长', url: '/user-growth' },
//       { title: '市场份额', url: '/market-share' },
//     ]
//   },
//   {
//     name: '财务报告', links: [
//       { title: '季度报告', url: '/quarterly-report' },
//       { title: '年度预算', url: '/annual-budget' },
//     ]
//   },
//   {
//     name: '项目管理', links: [
//       { title: '甘特图', url: '/gantt-chart' },
//       { title: '任务看板', url: '/task-board' },
//     ]
//   },
// ];


function PageIndex() {
  const bg_o = useColorModeValue('gray.200', 'gray.400')
  const bg_e = useColorModeValue('gray.100', 'gray.500')

  return (

    <Container maxW="full" p={0}>
      {
        indexTree.map((item, index) => (
          <Flex key={item.title} align="center" justify="center" bg={index % 2 == 0 ? bg_o : bg_e}>
            <Link p={8} m={4} as={RouterLink} _hover={{ textDecoration: 'none' }}
              to="/page"
              search={item.search}>
              <Text fontSize="5xl" fontWeight="500" textAlign="center" _hover={{ textDecoration: 'underline' }}> {item.title} </Text>
              <Text fontSize="sm" fontWeight="500" textAlign="center"> {item.describe} </Text>
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

    </Container >

  )
}
