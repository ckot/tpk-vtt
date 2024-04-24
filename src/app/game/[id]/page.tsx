export default async function Page({ params }: { params: {id: string }}) {
    const id = params.id;

    return (
        <div>
            Welcome game {id}. TODO: determine authorization whether you have access to this game and if so,
            whether you are owner, gm, or player
        </div>
    )

}