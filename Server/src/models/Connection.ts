import type Message from "./Message";

export default interface Connection {
    connection_id: string;
    member_0_cid: string;
    member_1_cid: string;
    connection_state: string;
    messages: Record<string, Message>;
}