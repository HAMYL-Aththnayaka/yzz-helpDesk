import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>YZZ HelpDesk Dashboard</h2>

      <p>
        Welcome to <strong>YZZ HelpDesk</strong>, your central platform for
        managing support requests efficiently. Create new tickets, track their
        progress, and stay informed about ongoing issues. Our goal is to help
        your team resolve problems quickly and provide excellent customer
        support.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Support Tickets</button>
        </Link>
      </div>

      <h2>Latest Updates</h2>

      <div className="card">
        <h3> Welcome to YZZ HelpDesk</h3>
        <p>
          The new HelpDesk portal is now live. Team members can submit support
          tickets, monitor ticket status, and collaborate with the support team
          from one convenient dashboard.
        </p>
      </div>

      <div className="card">
        <h3> Faster Ticket Resolution</h3>
        <p>
          We've introduced priority levels and improved ticket tracking to help
          our support team respond more quickly. High-priority issues are now
          highlighted, making it easier to identify and resolve urgent requests.
        </p>
      </div>

      <div className="card">
        <h3> Need Assistance?</h3>
        <p>
          If you're experiencing technical issues or need help with any company
          service, create a new support ticket. Our team will review your
          request and provide updates until the issue is resolved.
        </p>
      </div>
    </main>
  )
}