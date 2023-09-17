/* eslint-disable react/prop-types */
import { DollarSign, Heart } from 'react-feather'

 
const ProductBox = ({
  title,
  image,
  description,
  price,
  href,
  id
}) => {
  return (
    <div className='flex flex-col items-start gap-y-6 justify-between py-4 px-4 border border-gray-800 rounded-lg'>
      <h1 className='mt-2 font-semibold text-xl'>{title}</h1>
      <a href={href}>
        <img src={image} />
      </a>
      <h3 className='border-t border-gray-800 pt-4'>{description}</h3>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-row'>
          <DollarSign /> {price}
        </div>
        <Heart
          className='transition-colors cursor-pointer'
          id={`heart-${id}`}
          onClick={() => {
            const heart = document.getElementById(`heart-${id}`)
            heart.classList.toggle('fill-red-700')
            heart.classList.toggle('text-red-700')
          }}
        />
      </div>
    </div>
  )
}

export default ProductBox
