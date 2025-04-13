enum Status {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}


function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Pending:
            return "Your request is pending"

        case Status.Approved:
            return "Your request is approved"

        case Status.Rejected:
            return "Your request is rejected"

    }


}

console.log(getStatusMessage(Status.Approved))