function handleResponse(response) {
    if (response.status === "success") {
        console.log("Data: ", response.data);
    }
    else {
        console.log("Error: ", response.error);
    }
}
handleResponse({ status: "success", data: {
        id: 1,
        name: 'Alice'
    } });
handleResponse({ status: "error", error: "Something went wrong" });
export {};
