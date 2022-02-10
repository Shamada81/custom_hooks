import React, {useRef, useState} from 'react';
import Hover from "./components/Hover";
import {useHover} from "./hooks/useHover";

function App() {
    const ref = useRef()
    const isBlackHover = useHover(ref)

    return (
        <div>
          <Hover />
            <div
                ref={ref}
                ref={ref}
                style={{width: 300,
                    height: 300,
                    background: isBlackHover ? 'blue' : 'black' }}
            >
            </div>
        </div>
    );
}

export default App;
