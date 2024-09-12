import { Flex } from "@chakra-ui/react"
import { Outlet, createFileRoute } from "@tanstack/react-router"

import Navbar from "../components/UserCommon/Navbar"

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    // if (!isLoggedIn()) {
    //   throw redirect({
    //     to: "/login",
    //   })
    // }
  },
})

function Layout() {
  // const { isLoading } = useAuth()

  return (
    // <Flex maxW="large" h="auto" position="relative">
    //   {isLoggedIn() ? (
    //     <>
    //       <Sidebar />
    //       {isLoading ? (
    //         <Flex justify="center" align="center" height="100vh" width="full">
    //           <Spinner size="xl" color="ui.main" />
    //         </Flex>
    //       ) : (
    //         <Outlet />
    //       )}
    //       <UserMenu /></>
    //   ) : (
    //     <>
    //       <UserMenu />
    //     </>
    //   )}
    // </Flex>
    <>


      <Navbar></Navbar>
      <Flex>
        <Outlet />
        {/* <UserMenu /> */}
      </Flex>
    </>
  )
}
