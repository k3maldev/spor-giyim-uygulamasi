// eslint-disable-next-line react/prop-types
const Area = ({ children }) => {
  return (
    <div className='w-full h-auto p-6 items-start flex flex-col border border-gray-800 rounded-lg'>
      {children}
    </div>
  )
}

export default Area
