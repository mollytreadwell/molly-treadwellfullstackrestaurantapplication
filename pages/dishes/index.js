import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dish = ({data}) => {
    return (
        <React.Fragment key={re.id}>
            <Link legacyBehavior href="/menu">Order Online Today!</Link><br>
            </br>
            {data.map((re) => (
                <a key={re.id} href={`/dishes/${re.id}`}>
                    <Image alt={re.id} src={re.image} height={150} width={200} style={{padding:5}}/>
                </a>
            ))}
        </React.Fragment>
    )
}

export default Dish;

export async function getStaticProps(){
    const {restaurants} = await import('../../data/content.json');

    return {
        props: {
            data: restaurants,
        }
    }
}