import type React from "react"



type Props = {
    title: string,
    leftChildren?:React.ReactNode
}

const Header = ({title,leftChildren}:Props) => {
  return (
    <div className="flex flex-col gap-2">
    <div className="flex justify-between max-xl:mt-10 gap-2">
      <h2 className="font-bold dark:text-white text-2xl">{title}</h2>
      {leftChildren}
    </div>
    <div className="w-full my-5 h-[2px] bg-gray-200 dark:bg-zinc-600" />
  </div>
  )
}

export default Header