import PI, { doublePi, triplePi } from './math.js';

function Math() {
    return(
        <ul>
            <li>{PI}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>
        </ul>
    )
}

export default Math;