import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);

return (
    <div>
        <p>Has hecho click {count} veces</p>   
        <button onClick={() => setCount(count + 1)}>
            Hazme click
        </button>
    </div>
);
}