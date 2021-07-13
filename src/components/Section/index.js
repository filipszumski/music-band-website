import React from "react";

export const Section = ({ title, body, id }) => {

    return (
        <section>
            <h2 id={id}>
                {title}
            </h2>
            <div>
                {body}
            </div>
        </section>
    )
};