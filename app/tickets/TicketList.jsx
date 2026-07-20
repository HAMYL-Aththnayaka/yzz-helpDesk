import Link from "next/link";

//fetching Tickets logic
async function fetch_tickets() {

    //just trying delaing to see delay screen
   // await new Promise(resolve => setTimeout(resolve,3000));
    const result = await fetch("http://localhost:4000/tickets", {
        next: {
          //revalidate: 30 // only after 30 seconds it will update again from database
            revalidate: 0 // every time refresh updated from db
        }
    })
    if (!result.ok) {
        throw new Error("Failed to fetch tickets");
    }
    return result.json()
}

export default async function TicketList() {
    //just trying delaing to see delay screen
    await new Promise(resolve => setTimeout(resolve,1000));
    
    const tickets = await fetch_tickets();
    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5 text-center">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)} ...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.lenght === 0 && (
                <p className="text-center">
                    There are no open tickets
                </p>
            )}
        </>
    )
}
