import React from 'react';
import axios from "axios";
import {Link} from '../../router';
import Head from "next/head";
import {config} from "../config/config";

interface IProps {
    query: {
        id: number,
    },
    photo: {
        id: number,
        title: string,
        albumId: number,
        thumbnailUrl: string,
    } | null,
}

const Photo = (props: IProps) => {
    const photo = props.photo;
    return (
        <div>
            {photo !== null && (
                <React.Fragment>
                    <Head>
                        <title>{photo.title}</title>
                        <meta property="og:title" content={photo.title}/>
                        <meta property="og:description" content={"Detail: " + photo.title}/>
                        <meta property="og:image" content={photo.thumbnailUrl}/>
                        <meta property="og:url" content={config.app_base_url + '/photo/' + props.query.id}/>
                    </Head>
                    <div style={{border: "1px solid #a6a6a6", marginBottom: 10, width: 400}}>
                        <div style={{color: "green", fontWeight: "bold"}}>
                            <Link route={"/photos"} className={"ok"}>Back to previous page</Link>
                        </div>

                        <div>
                            <b>Title</b>: {photo.title}
                        </div>
                        <div>
                            <img style={{width: 100}} src={photo.thumbnailUrl} alt={photo.title}/>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

Photo.getInitialProps = async ({query}: any) => {

    const getPhoto = await axios.get('https://jsonplaceholder.typicode.com/photos/' + query.id).then(({data}) => {
        return data;
    }).catch((error) => {
        console.log(error);
        return null;
    });

    return {query, photo: getPhoto};
};

export default Photo;
