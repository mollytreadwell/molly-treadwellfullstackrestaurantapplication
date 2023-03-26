import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



export default function Dishes({ data }) {
    return (<>
        <h1>Home</h1>
            {data.map((re) => (
            <React.Fragment key={re.id}>
                <Link legacyBehavior href={`/dishes/${re.id}`}>
                    <a className='card'>
                    <div className='image'>
                    <Image alt={re.name} height={300} width={300} src={re.image}/>
                    </div>
                    </a>             
                </Link>
                <div className='content'>
                    <h2>{re.name}</h2>
                    <p>{re.description}</p>
                </div>
            </React.Fragment>
            ))}
        </>)
}


export async function getStaticProps(){
    const {restaurants} = await import('../data/content.json')

    return {
        props: {
            data: restaurants,
        }
    }
}