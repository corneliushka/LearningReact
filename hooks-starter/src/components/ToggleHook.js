import React, { useState } from 'react';    

const ToggleHook = () => {
    const [isToggled, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!isToggled)}>Instruction 1 :</button>
            {isToggled && <h2>Insérez votre mail</h2>}
        </div>

    )
}

export default ToggleHook;