import Head from 'next/head'

export default function Home() {
  return (
    <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
    </head>
    <body class="bg-black">
    <div class="flex place-content-center my-10">
      <h1 class="text-6xl font-permanent-marker text-white">Paolo van Rijn</h1>
    </div>
    </body>
    </>
  )
}
