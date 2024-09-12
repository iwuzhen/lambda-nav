import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiEdit, FiTrash } from "react-icons/fi"

import type { ItemPublic, UserPublic, ExternalPage, PageTag } from "../../client"
import EditUser from "../Admin/EditUser"
import EditItem from "../Items/EditItem"
import EditExternalPage from "../ExternalPages/EditExternalPage"
import Delete from "./DeleteAlert"
import EditPageTag from "../PageTags/EditPageTag"

interface ActionsMenuProps {
  type: string
  value: ItemPublic | UserPublic | ExternalPage
  disabled?: boolean
}

const ActionsMenu = ({ type, value, disabled }: ActionsMenuProps) => {
  const editUserModal = useDisclosure()
  const deleteModal = useDisclosure()
  let editor;
  if (type === "User") {
    editor = <EditUser user={value as UserPublic}
      isOpen={editUserModal.isOpen}
      onClose={editUserModal.onClose} />
  } else if (type === "Item") {
    editor = <EditItem item={value as ItemPublic}
      isOpen={editUserModal.isOpen}
      onClose={editUserModal.onClose} />
  } else if (type === "ExternalPage") {
    editor = <EditExternalPage item={value as ExternalPage}
      isOpen={editUserModal.isOpen}
      onClose={editUserModal.onClose} />
  } else if (type === "PageTag") {
    editor = <EditPageTag item={value as PageTag}
      isOpen={editUserModal.isOpen}
      onClose={editUserModal.onClose} />
  }
  return (
    <>
      <Menu>
        <MenuButton
          isDisabled={disabled}
          as={Button}
          rightIcon={<BsThreeDotsVertical />}
          variant="unstyled"
        />
        <MenuList>
          <MenuItem
            onClick={editUserModal.onOpen}
            icon={<FiEdit fontSize="16px" />}
          >
            Edit {type}
          </MenuItem>
          <MenuItem
            onClick={deleteModal.onOpen}
            icon={<FiTrash fontSize="16px" />}
            color="ui.danger"
          >
            Delete {type}
          </MenuItem>
        </MenuList>
        {editor}
        <Delete
          type={type}
          id={value.id}
          isOpen={deleteModal.isOpen}
          onClose={deleteModal.onClose}
        />
      </Menu>
    </>
  )
}

export default ActionsMenu
