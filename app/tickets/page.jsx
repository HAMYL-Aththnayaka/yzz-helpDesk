import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function ticket() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>currently open tickets</small></p>
                </div>
            </nav>
            
            {/*Suspend this because onlithe ticket list should be loaded and not the above static data*/}
            <Suspense fallback={<Loading/>}>
                <TicketList />
            </Suspense>
        </main>
    )
};