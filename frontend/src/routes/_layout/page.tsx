import { Box, Container, Text } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import SearchPageView from "../../components/ExternalPageView/searchPageView"

type PageQueryParameterType = {
    tags?: string[]
    origin?: string[]
    view?: string[]
    title: string
}

// 使用 Omit 去掉 title 属性
export type PageQueryWithoutTitle = Omit<PageQueryParameterType, 'title'>;


export const Route = createFileRoute("/_layout/page")({
    component: Page,
    validateSearch: (search: Record<string, unknown>): PageQueryParameterType => {
        // validate and parse the search params into a typed state
        return {
            tags: search?.tags as string[],
            origin: search?.origin as string[],
            view: search?.view as string[],
            title: search?.title as string,
        }
    },
})

function Page() {
    const searchParamater = Route.useSearch()
    // console.log(search)
    return (
        <>
            <Container maxW="full">
                <Box pt={12} m={4}>
                    <Text fontSize='5xl' as='b'>{searchParamater.title}</Text>
                    <SearchPageView searchParameter={searchParamater as PageQueryWithoutTitle} />
                </Box>
            </Container>
        </>
    )
}
