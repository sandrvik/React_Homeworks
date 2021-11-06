import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../components/Button/Button";
import { ColorOption } from "../../components/ColorOption/ColorOption";
import { Input } from "../../components/Input/Input";
import { Modal } from "../../components/Modal/Modal";
import { OptionsBlock } from "../../components/OptionsBlock/OptionsBlock";
import { Task } from "../../components/Task/Task";

import { incrementId } from "../../store/actions/idActions";
import { changeInput } from "../../store/actions/inputActions";
import { resetColors, setBack, setText } from "../../store/actions/styleActions";
import { addTask, handleComplete, removeTask } from "../../store/actions/tasksActions";

import "./ToDo.css";

const TEXT_COLORS = ['white', 'black', 'red', 'blue'];
const BACK_COLORS = ['white', 'black', 'red', 'blue'];

export const ToDo = () => {
    const dispatcher = useDispatch();

    const [tasks] = useSelector(({ tasks }) => ([tasks]));
    const { value } = useSelector(({ input: { value } }) => ({ value }));
    const id = useSelector(({ id }) => id);
    const { text: textColor, back: backColor } = useSelector(({ style }) => style);

    const handleChange = ({ target: { value } }) => {
        dispatcher(changeInput(value))
    }

    const handleClick = () => {
        if (value) {
            dispatcher(addTask({
                text: value,
                id,
                textColor,
                backColor,
                completed: false,
            }))
            dispatcher(incrementId())
            dispatcher(changeInput(''))
            dispatcher(resetColors())
        }
    }

    const deleteTask = (id) => {
        dispatcher(removeTask(id))
    }

    const handleTaskComplete = (id) => {
        dispatcher(handleComplete(id))
    }

    const spawnColors = () => {
        return TEXT_COLORS.map((color, i) => {
            return <ColorOption
                key={i}
                onClick={() => dispatcher(setText(color))}
                color={color}
                active={textColor === color}
            />
        })
    }

    const spawnBackgrounds = () => {
        return BACK_COLORS.map((color, i) => {
            return <ColorOption
                key={i}
                onClick={() => dispatcher(setBack(color))}
                color={color}
                active={backColor === color}
            />
        })
    }

    const spawnTasks = (tasks) => {
        return tasks.map((task, i) => {
            return <Task
                handleTaskComplete={() => handleTaskComplete(task.id)}
                completed={task.completed}
                key={task.id}
                number={i + 1}
                text={task.text}
                backColor={task.backColor}
                textColor={task.textColor}
                onClick={() => deleteTask(task.id)}
            />
        })
    }

    return (
        <div className='todo'>
            <div className='todo__header'>
                <Input
                    className='todo__input'
                    placeholder='Task...'
                    value={value}
                    onChange={handleChange}
                />
                <Button onClick={handleClick} title='Add task' />
                <Modal titleActive='Hide options' titleHidden='Show options'>
                    <OptionsBlock title='Colors: '>
                        {spawnColors()}
                    </OptionsBlock>
                    <OptionsBlock title='Backgrounds: '>
                        {spawnBackgrounds()}
                    </OptionsBlock>
                </Modal>
            </div>
            {spawnTasks(tasks)}
        </div>
    )
}