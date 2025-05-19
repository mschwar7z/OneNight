import React from 'react'


const Content = () => {
    const handleNameChange = () => {
        const names = ['Mia', 'Angie', 'Charlie'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log('You clicked it')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    //listening for the event. this will give an event's inner text, in this case: Click it
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    //Will handle events on the click. useful when rerunning just a specific component, not the
    //whole page.
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button on onClick={handleClick}>Click it</button>
            <button on onClick={() => handleClick2('Dave')}>Click it</button>
            <button on onClick={(e) => handleClick3(e)}>Click it</button>

        </main>
    )
}

export default Content