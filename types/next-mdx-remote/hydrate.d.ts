import { ReactNode } from "react"
import { MDXProviderComponents } from "mdx-js__react"

declare function hydrate(
  input: {
    compiledSource: string
    renderedOutput: string
    scope: { [key: string]: any }
  },
  options?: { components?: MDXProviderComponents }
): ReactNode

export = hydrate
