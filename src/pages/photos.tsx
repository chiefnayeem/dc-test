import React from 'react';
import axios from "axios";
import {Link} from '../../router';
import Head from "next/head";
import {config} from '../config/config';

interface IPhoto {
    id: number,
    title: string,
    albumId: number,
    thumbnailUrl: string,
}

interface IProps {
    photos: IPhoto[];
}

const Photos = (props: IProps) => {
    const photos = props.photos;
    console.log(photos)
    return (
        <div>
            <Head>
                <title>My Photos</title>
                <meta property="og:title" content="My Photos"/>
                <meta property="og:description" content="This is my next js app which will let you view some of my photos"/>
                <meta property="og:image" content="https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/06/twitter-card.jpg"/>
                <meta property="og:url" content={config.app_base_url + '/photos'}/>
            </Head>
            {photos.map((photo: IPhoto, index: number) => (
                <div key={index} style={{border: "1px solid #a6a6a6", marginBottom: 10, width: 400}}>
                    <div>
                        <b>Title</b>: {photo.title}
                    </div>

                    <div style={{color: "green", fontWeight: "bold"}}>
                        <Link route={"/photo/" + photo.id} className={"ok"}>Go to detail</Link>
                    </div>

                    <div>
                        <img style={{width: 100}} src={photo.thumbnailUrl} alt={photo.title}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

Photos.getInitialProps = async () => {
    const photos = await axios.get('https://jsonplaceholder.typicode.com/photos').then(({data}) => {
        return data.slice(0, 20);
    }).catch((error) => {
        console.log(error);
        return [];
    });

    return {photos};
};

export default Photos;
