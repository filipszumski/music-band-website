import React from "react";

export const Section = ({ title, body }) => {

    return (
        <section>
            <h2>
                {title}
            </h2>
            <div>
                {body}
            </div>
        </section>
    )
};