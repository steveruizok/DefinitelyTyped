import { MDXProviderComponentsProp } from "mdx-js__react"

declare function renderToString<T extends { [key: string]: any }>(
  source: string,
  options?: {
    mdxOptions: any
    components: MDXProviderComponentsProp
    scope: T
  }
): Promise<{
  compiledSource: string
  renderedOutput: string
  scope: T
}>

export = renderToString
