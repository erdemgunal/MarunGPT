import { generateUUID } from "@/lib/utils";

export default function ChatPage() {
    const id = generateUUID();
    return (
        <div>ChatPage: {id}</div>
    )
}
