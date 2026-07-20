import Link from "next/link";

export default function NotFound(){
    return(
        <main className="text-center">
            
            <h2 className="text-3xl">There was a problem</h2>
            <p>We could not find the Ticket you wer looking for </p>
            <p>View the available <Link href="/tickets"> <b><u>Tickets </u></b></Link></p>
        </main>
    );
}