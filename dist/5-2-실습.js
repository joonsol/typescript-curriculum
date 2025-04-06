"use strict";
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Approved"] = "APPROVED";
    Status["Rejected"] = "REJECTED";
})(Status || (Status = {}));
function getStatusMessage(status) {
    switch (status) {
        case Status.Pending:
            return "Your request is pending";
        case Status.Approved:
            return "Your request is approved";
        case Status.Rejected:
            return "Your request is rejected";
    }
}
console.log(getStatusMessage(Status.Approved));
