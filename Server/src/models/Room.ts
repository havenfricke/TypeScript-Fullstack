import type Message from "./Message";

export default interface Room {
    roomd_id: string;
    name: string;
    member_ids: Array<string>;
    invited_ids: Array<string>;
    messages: Record<string, Message>;
}