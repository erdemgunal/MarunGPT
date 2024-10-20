import React from 'react'

export default async function Page({ params }) {
    const { id } = params;
    return (
        <div>page: {id}</div>
    )
}
