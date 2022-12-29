import React from 'react'

const CardContent = () => {

  const cards = [
    {
      id: 1,
      image: "tech",
      images: "hotel",
      righticon: "boxicon",
      lefticon: "accmicon",
      gradientText1: "Technology",
      cardTitle1: "Unleashing the strength of",
      cardContent1: "1. We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.",
      cardTitle2: "Making accommodations easier",
      cardContent2: "Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices.",
      readmore: "Readmore"
    },
    {
      id: 2,
      image: 'packing',
      images: 'fmcg',
      righticon: "packicon",
      lefticon: "carticon",
      gradientText1: "Growth",
      cardTitle1: "Packaging industry for business ",
      cardContent1: "We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority.",
      cardTitle2: "Offering the best with FMCG industry",
      cardContent2: "Ramaera FMCG industry has commenced an extensive range of FMCG to make your days more than ordinary. We plan to offer you nothing less than the best.",
      readmore: "Readmore"
    },
    {
      id: 3,
      image: 'agri',
      images: 'ecomrce',
      righticon: "natureicon",
      lefticon: "placeicon",
      gradientText1: "Nature's Love",
      cardTitle1: "Agri-business to bestow",
      cardContent1: "Our Agri-business industry is established to get you fresh and organic fruits and vegetables with the blessed with the touch of nature",
      cardTitle2: "Get all your essentials in one place",
      cardContent2: "Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes.",
      readmore: "Readmore"
    },
  ]

  return (
    <>
      {cards.map((data, index) =>
        <>
          <div className='content-row grid grid-cols-2 gap-16'>
            <div className='text-left flex items-end'>
              <img className='pt-32 w-4/5 relative' src={require(`../images/${data.image}.png`)} />
            </div>
            <div className={`relative text-right flex items-start justify-start flex-row ${data.righticon}`}>
              <div>
                <h3 className='card-title'>{data.cardTitle1} <span className={`color${data.id}`}>{data.gradientText1}</span></h3>
                <p className='card-content pt-8'>{data.cardContent1}</p>
                <div className='btn w-full'>
                  <button className='readmore'>{data.readmore}</button>
                </div>
              </div>
              <div className='icon-box ml-5 mt-3'>
                <button className='icon'>
                  <img className='relative' src={require(`../images/${data.righticon}.png`)} />
                </button>
              </div>

            </div>
          </div>
          <div className='content-row grid grid-cols-2 gap-16'>
            <div className={`pt-52 text-left flex items-start justify-end flex-row ${data.lefticon}`}>
              <div className='icon-box mr-5 mt-3'>
                <button className='icon'>
                  <img className='relative' src={require(`../images/${data.lefticon}.png`)} />
                </button>
              </div>
              <div>
                <h3 className={`card-title`}>{data.cardTitle2}</h3>
                <p className='card-content pt-8'>{data.cardContent2}</p>
                <div className='btn w-full'>
                  <button className='readmore'>{data.readmore}</button>
                </div>
              </div>

            </div>
            <div className='text-right flex justify-end items-start'>
              <img className='w-3/6 relative' src={require(`../images/${data.images}.png`)} />
            </div>
          </div>
        </>
      )}


    </>

  )
}

export default CardContent