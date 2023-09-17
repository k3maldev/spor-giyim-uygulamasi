import Area from '../components/Area'
import ProductBox from '../components/ProductBox'

const Main = () => {
  return (
    <div className='w-[90%] items-center flex flex-col mt-[100px] gap-y-[100px]'>
      <div className='z-[1] text-[3rem] grid grid-cols-1 lg:grid-cols-2 md:text-[6rem] uppercase font-logo'>
        <h1>1949&apos;dan beri en kaliteli ürünler</h1>
        <a
          href='#'
          className='flex flex-col items-center w-[200px] md:w-[575px] mt-[100px]'
        >
          <img
            src='/product.png'
            className='rotate-[15deg] w-full'
          />
        </a>
      </div>
      <div className='flex flex-col items-center gap-y-8 w-full'>
        <h1 className='font-logo text-[3rem]'>Simdi Popüler</h1>
        <div className='w-full h-auto py-[50px] border-y border-gray-800 mb-[100px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center overflow-y-scroll'>
          <ProductBox
            title='Predator'
            image='/product.png'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi at quibusdam, fuga obcaecati provident autem vitae iusto. Neque autem sint eaque. Sed, nisi exercitationem.'
            price='29.99'
            href='#'
            id={Math.floor(Math.random() * 100)}
          />
          <ProductBox
            title='Predator'
            image='/product.png'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi at quibusdam, fuga obcaecati provident autem vitae iusto. Neque autem sint eaque. Sed, nisi exercitationem.'
            price='29.99'
            href='#'
            id={Math.floor(Math.random() * 100)}
          />
          <ProductBox
            title='Predator'
            image='/product.png'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi at quibusdam, fuga obcaecati provident autem vitae iusto. Neque autem sint eaque. Sed, nisi exercitationem.'
            price='29.99'
            href='#'
            id={Math.floor(Math.random() * 100)}
          />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='font-logo text-[3rem]'>Hikayemiz</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-16 w-full border-y border-gray-800 p-8'>
          <Area>
            <h1 className='mt-2 font-semibold text-xl'>
              Lorem Impsun
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Iusto beatae deserunt mollitia tenetur quas animi
              eligendi placeat cum. Placeat, ipsam eum quaerat natus
              nam ex quisquam atque, rem accusamus iure excepturi
              magnam quae doloremque? Pariatur necessitatibus officiis
              maiores doloribus iste, sequi qui aut doloremque. Et,
              ipsum fuga, necessitatibus ipsam voluptatibus dolore
              velit iste dignissimos illo eveniet, modi aspernatur
              dolor adipisci harum? Qui numquam, temporibus quos
              laborum tempora, optio ad similique cupiditate culpa
              odio doloribus. Obcaecati!
            </p>
          </Area>
          <Area>
            <h1 className='mt-2 font-semibold text-xl'>
              Lorem Impsun
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Iusto beatae deserunt mollitia tenetur quas animi
              eligendi placeat cum. Placeat, ipsam eum quaerat natus
              nam ex quisquam atque, rem accusamus iure excepturi
              magnam quae doloremque? Pariatur necessitatibus officiis
              maiores doloribus iste, sequi qui aut doloremque. Et,
              ipsum fuga, necessitatibus ipsam voluptatibus dolore
              velit iste dignissimos illo eveniet, modi aspernatur
              dolor adipisci harum? Qui numquam, temporibus quos
              laborum tempora, optio ad similique cupiditate culpa
              odio doloribus. Obcaecati!
            </p>
          </Area>
        </div>
      </div>
      <div>
        <p className='flex flex-col md:flex-row gap-8 mt-2 font-semibold text-xl items-center'>
          Üye olarak yeni ürünlerimizden ve indirimlerden haberdar ol!
          <a
            href='#'
            className='py-2 px-8 rounded-lg bg-gray-700/25 hover:text-theme transition-colors'
          >
            Kayıt Ol
          </a>
        </p>
      </div>
    </div>
  )
}

export default Main
