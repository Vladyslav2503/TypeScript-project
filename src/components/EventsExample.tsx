import React, { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from 'react'

const EventsExample :FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

  return (
    <div>
        <input value={value} onChange={changeHandler} type='text'placeholder='Керуючий input' />
        <input ref={inputRef} type='text'placeholder='Некеруючий input' />
        <button onClick={clickHandler} >Кнопка</button>
        <div onDrag={dragHandler}  draggable style={{width: 200, height: 200, background: 'red'}} ></div>
        <div
             onDrop={dropHandler} 
             onDragLeave={leaveHandler} 
             onDragOver={dragWithPreventHandler}
             style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red' , marginTop: 15}} ></div>
    </div>
  )
}

export default EventsExample