import React from "react";
import { Video } from "./styled";
import { VideoContainer } from "./VideoContainer";

export const Videos = () => {

    return (
        <>
            <VideoContainer
                title="Ślady"
                body={
                    <Video
                        src="https://www.youtube.com/embed/teJtMRjR_tY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </Video>}
            />
            <VideoContainer
                title="Telefon"
                body={
                    <Video
                        src="https://www.youtube.com/embed/h-6N1Oxoo4o"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </Video>}
            />
            <VideoContainer
                title="Czerwona sukienka"
                body={
                    <Video
                        src="https://www.youtube.com/embed/bQWQxdCs7uc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </Video>}
            />
        </>
    )
};