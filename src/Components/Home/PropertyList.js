import React from 'react'

const PropertyList = () => {
    const cardsData=[{
id:1,
image:"/assets/image1.jpeg",
name:"House Manali",
address:"Manali,Himachal Pradesh,India",
price:1999,

    },

{

    id:2,
    image:"/assets/property2.webp",
    name:"Villa Home",
    address:'Coorg, India',
    price:4000,
}]
  return (
    <div className='propertylist'>
{cardsData.map((card)=>(<Card
key={card.id}
image={card.image}
name={card.name}
address={card.address}
price={card.price}


/>))}
      
    </div>
  )
}

export default PropertyList