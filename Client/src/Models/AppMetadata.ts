import type Connection from "./Connection";
import type Room from "./Room";

export default interface AppMetadata {
    current_page: string;
    username: string;
    rooms: Array<Room>;
    connections: Array<Connection>;
}