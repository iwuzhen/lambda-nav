import { Box, Container } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"

import ExplorPageView from "../../components/ExternalPageView/explorPageView"

export const Route = createFileRoute("/_layout/explorer")({
    component: Explorer,
})

function Explorer() {

    return (
        <>
            <Container maxW="full">
                <Box pt={12} m={4}>
                    <ExplorPageView />
                </Box>
            </Container>
        </>
    )
}
