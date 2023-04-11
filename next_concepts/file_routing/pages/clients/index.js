import Link from "next/link";

function ClientProjectPage() {
    const clients = [
        { id: "max", name: "Rock" }
    ]

    return (
        <div>
        <h1>The Project Page for a Clients</h1>
        <ul>
        {clients.map((client) => (
            <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
        ))}
        </ul>
        </div>
    )
}

export default ClientProjectPage;