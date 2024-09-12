import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

import type {
  ExternalPagesPublic,
  ExternalPageCreate,
  ExternalPage,
  PageTag,
  PageTagCreate,
  PageTags
} from "./models"

import type {
  Message
} from "../models"

export type TDataReadExternalPage = {
  id: string
}

export type TDataReadExternalPages = {
  limit?: number
  skip?: number
}

export type TDataDeleteExternalPage = {
  id: string
}

export type TDataCreateExternalPage = {
  requestBody: ExternalPageCreate
}

export type TDataUpdateExternalPage = {
  id: string
  requestBody: ExternalPageCreate
}


export class ExternalPagesService {
  /**
   * Read ExternalPages
   * Retrieve ExternalPages.
   * @returns ExternalPages Successful Response
   * @throws ApiError
   */
  public static readExternalPages(
    data: TDataReadExternalPages = {},
  ): CancelablePromise<ExternalPagesPublic> {
    const { limit = 100, skip = 0 } = data
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/external_pages/",
      query: {
        skip,
        limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }



  /**
   * Create Item
   * Create new item.
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static createExternalPage(
    data: TDataCreateExternalPage,
  ): CancelablePromise<ExternalPage> {
    const { requestBody } = data
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/external_pages/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Item
   * Get item by ID.
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static readExternalPage(data: TDataReadExternalPage): CancelablePromise<ExternalPage> {
    const { id } = data
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/external_pages/{id}",
      path: {
        id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update ExternalPage
   * Update an ExternalPage.
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static updateExternalPage(
    data: TDataUpdateExternalPage,
  ): CancelablePromise<ExternalPage> {
    const { id, requestBody } = data
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/external_pages/{id}",
      path: {
        id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete ExternalPage
   * Delete an ExternalPage.
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteItem(data: TDataDeleteExternalPage): CancelablePromise<Message> {
    const { id } = data
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/external_pages/{id}",
      path: {
        id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}


// page Tags Service

export type TDataReadPageTag = {
  id: string
}

export type TDataReadPageTags = {
  limit?: number
  skip?: number
  title?: string
}

export type TDataDeletePageTag = {
  id: string
}

export type TDataCreatePageTag = {
  requestBody: PageTagCreate
}

export type TDataUpdatePageTag = {
  id: string
  requestBody: ExternalPageCreate
}

export class PageTagsService {
  /**
   * Read PageTags
   * Retrieve PageTags.
   * @returns PageTags Successful Response
   * @throws ApiError
   */
  public static readPageTags(
    data: TDataReadPageTags = {},
  ): CancelablePromise<PageTags> {
    const { limit = 100, skip = 0, title = "" } = data
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/page_tags/",
      query: {
        skip,
        limit,
        title,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }



  /**
   * Create Item
   * Create new item.
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static createPageTag(
    data: TDataCreateExternalPage,
  ): CancelablePromise<ExternalPage> {
    const { requestBody } = data
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/page_tags/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Item
   * Get item by ID.
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static readExternalPage(data: TDataReadExternalPage): CancelablePromise<ExternalPage> {
    const { id } = data
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/page_tags/{id}",
      path: {
        id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update PageTag
   * Update an PageTag.
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static updatePageTag(
    data: TDataUpdatePageTag,
  ): CancelablePromise<PageTag> {
    const { id, requestBody } = data
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/page_tags/{id}",
      path: {
        id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete PageTag
   * Delete an PageTag.
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deletePageTag(data: TDataDeletePageTag): CancelablePromise<Message> {
    const { id } = data
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/page_tags/{id}",
      path: {
        id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}
