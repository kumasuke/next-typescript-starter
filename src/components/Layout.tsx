import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export const Layout = (props: Props) => {
  return (
    <div
      {...props}
      className="flex min-h-screen px-2 flex-col justify-start items-center py-16"
    >
      {props.children}
    </div>
  )
}
