import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



export default function Dishes(props) {
    const data = props.data;
    return (<>
        <h1>Home</h1>
            {data.map((post) => (
            <React.Fragment key={post.id}>
                <Link legacyBehavior href={`/dishes/${post.id}`}>
                    <a className='card'>
                    <div className='image'>
                    <Image alt={post.name} height={300} width={500} src={post.image}/>
                    </div>
                    </a>             
                </Link>
                <div className='content'>
                    <h2 className='menu-card'>{post.name}</h2> 
                    <p className='home-p'>{post.description}</p>
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