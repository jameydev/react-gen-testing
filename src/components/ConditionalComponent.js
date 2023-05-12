import { useState } from 'react';
import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);
    
    return display ? (<Counter />) : (<FunctionalCounter />);
}