import localFont from 'next/font/local'

export const syncopate = localFont({
  src: [
    {
      path: '../../public/fonts/Syncopate/Syncopate-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Syncopate/Syncopate-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
})

export const rockwell = localFont({
  src: [
    {
      path: '../../public/fonts/Rockwell-Font/Rockwell-Bold.ttf',
      // D:\ecommerce\nextjs-clients\nasa-infinity-2\public\fonts\Rockwell-Font\ROCK.TTF
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rockwell-Font/Rockwell-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-rockwell',
})

export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/static/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
})

export const lusitana = localFont({
  src: [
    {
      path: '../../public/fonts/Lusitana/Lusitana-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lusitana/Lusitana-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lusitana',
})

export const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
})