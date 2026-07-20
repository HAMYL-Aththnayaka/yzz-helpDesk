import { notFound } from "next/navigation";

export const dynamicParams = true;


export async function generateStaticParams(){
    const response = await fetch("http://localhost:4000/tickets")
    if(!response.ok){
        throw new Error ("The Tickets are not available");
    }
    const get_tickets = await response.json();


    return get_tickets.map((ticket)=>({
            id:ticket.id
    }));
    //this is used to improve the performance because thiswill pre load the pages
    //this is used when revalidate is not 0
}

async function get_Ticket_data(id) {
    const result = await fetch("http://localhost:4000/tickets/" + id, {
        next: {
            revalidate: 60,
        }
    })

    if (!result.ok) {
        notFound();
    }

    return result.json();
}

export default async function TicketDetails({ params }) {
    const { id } = await params;
    const ticket = await get_Ticket_data(id)

    return (
        <main>
            <nav>
                <h2>Ticket  Details</h2>
            </nav> 
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created By : {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    );
}