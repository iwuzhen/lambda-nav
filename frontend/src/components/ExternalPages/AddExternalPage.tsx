import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type SubmitHandler, useForm } from "react-hook-form"

import { type ApiError, type ExternalPage, ExternalPagesService } from "../../client"
import useCustomToast from "../../hooks/useCustomToast"
import { handleError } from "../../utils"
import EditPageTag from "./EditPageTag"

interface AddExternalPageProps {
  isOpen: boolean
  onClose: () => void
}

const AddExternalPage = ({ isOpen, onClose }: AddExternalPageProps) => {
  const queryClient = useQueryClient()
  const showToast = useCustomToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExternalPage>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      title: "",
      abstract: "",
      description: "",
      public_url: "",
      private_url: "",
    },
  })

  const mutation = useMutation({
    mutationFn: (data: ExternalPage) =>
      ExternalPagesService.createExternalPage({ requestBody: data }),
    onSuccess: () => {
      showToast("Success!", "Item created successfully.", "success")
      reset()
      onClose()
    },
    onError: (err: ApiError) => {
      handleError(err, showToast)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["External-pages"] })
    },
  })

  const onSubmit: SubmitHandler<ExternalPage> = (data) => {
    mutation.mutate(data)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add External Page</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired isInvalid={!!errors.title}>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                {...register("title", {
                  required: "Title is required.",
                })}
                placeholder="Title"
                type="text"
              />
              {errors.title && (
                <FormErrorMessage>{errors.title.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea 
                id="description"
                {...register("description")}
                placeholder="Description"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="abstract">abstract</FormLabel>
              <Textarea
                id="abstract"
                {...register("abstract")}
                placeholder="abstract"
              />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel htmlFor="tags">tags</FormLabel>
              <EditPageTag/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="public_url">public_url</FormLabel>
              <Input
                id="public_url"
                {...register("public_url")}
                placeholder="public_url"
                type="text"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="private_url">private_url</FormLabel>
              <Input
                id="private_url"
                {...register("private_url")}
                placeholder="private_url"
                type="text"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter gap={3}>
            <Button variant="primary" type="submit" isLoading={isSubmitting}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddExternalPage
