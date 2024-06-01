export default async function Page({ params }: { params: {id: string }}) {
    const id = params.id;

    return (
        <div>
            I need to redirect or just remove this page and have the reverse proxy handle this endpoint
        </div>
    )

}