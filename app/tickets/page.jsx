import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function ticket() {
    return (
        <main>
            <nav className="tickets-header">
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open tickets</small></p>
                </div>
                <div>
                    <Link href="/tickets/create">
                        <span className="btn-third">
                            + Create Ticket
                        </span>
                    </Link>
                </div>
            </nav>

            {/*Suspend this because onlithe ticket list should be loaded and not the above static data*/}
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
};