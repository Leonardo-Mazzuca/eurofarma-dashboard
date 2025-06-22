

const PromptCard = ({prompt}:{prompt:string}) => {
  return (
    <div className="flex-1 hover:bg-blue-300 cursor-pointer h-[180px] bg-blue-200 rounded-lg p-3">
      <span className="font-semibold text-sm md:text-xl">
        {prompt}
      </span>
    </div>
  )
}

export default PromptCard