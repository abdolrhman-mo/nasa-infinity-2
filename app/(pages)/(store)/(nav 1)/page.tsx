'use client'

import CustomLink from '@/app/ui/common/custom-link'
import { poppins, rockwell } from '@/app/ui/fonts'
import Hero from '@/app/ui/home/hero'
import ProductGallery from '@/app/ui/home/product-gallery'
import { fetchProducts } from '@/redux/features/products/productsThunk'
import { useAppDispatch } from '@/redux/store'
import { useEffect } from 'react'

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  },
}) {
  const dispatch = useAppDispatch()

  // const query = searchParams?.query || ''
  // const currentPage = Number(searchParams?.page) || 1

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <main className={`${rockwell.className} antialiased z-10`}>
      {/* Nav Search Results */}
      {/* <NavSearchResults products={products} query={query} currentPage={currentPage} /> */}

      <div className="z-10 text-white">
        <Hero />

        <div id="new-collection"></div>
        <ProductGallery title='our store' tag='all' />
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className='w-1/2 md:w-1/6 mx-auto'>
        <CustomLink 
          href="/sell"
          theme="light"
          className="mx-auto rounded-3xl font-semibold text-orange-500 border-none"
        >
          Sell Your Cloth
        </CustomLink>
        <br />
        <CustomLink 
          href="/sell"
          theme="light"
          className="mx-auto rounded-3xl font-semibold !bg-orange-500 text-white border-none"
        >
          Donate Your Cloth
        </CustomLink>
      </div>
    </main>
  );
}