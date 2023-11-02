import client from "./client";

export const createSession = ({gender, age}) => {
    return client('/api/create/session', {
        body: { gender, age}
    });
}
export const getAllResults = ({session_id}) => {
    return client('/api/get/results', {
        body: {session_id}
    })
}
