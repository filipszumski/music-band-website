import React from "react";
import { VideoWrapper } from "./styled";

export const VideoContainer = ({ title, body }) => {

    return (
        <>
            <h3>{title}</h3>
            <VideoWrapper>
                {body}
            </VideoWrapper>
        </>
    )
}