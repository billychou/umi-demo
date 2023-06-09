import { useState } from "react";
import { sculptureList } from "./data"
import { Button, Card, Row, Col, Input } from "antd";
import styles from './index.less';

/**
 * init functions
 */
function createInitialTodos() {
    const initialTodos = [];
    for (let i=0; i<50; i++) {
        initialTodos.push({ 
            id: i, 
            text: 'ITEM' + (i + 1)
        });
    }
    return initialTodos;
}


/**
 * StateDemoComponent component 
 * 
 * @returns 
 */
const StateDemoComponent: React.FC = () => {
    /**
     * index, setIndex
     */
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('hello');
    const [stateDemo, setStateDemo] = useState(0);
    const [age, setAge] = useState(0);
    const [form, setForm] = useState({
        firstName: "John",
        lastName: "Chou",
        email: "xxxx@gmail.com"
    });
    // passing the initializer function 
    const [todos, setTodos] = useState(createInitialTodos);

    /**
     * age+1
     */
    const incrementAge = () => {
        setAge(a => a+1);
        console.error(age);
    }

    /**
     * increment age + 3
     */
    const ageOnClickHandler = () => {
        incrementAge();
        incrementAge();
        incrementAge();
    }

    /**  
     * eventHandler 
     * */
    function onClickHandler() {
        setAge(a => a+1);
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
            setStateDemo(stateDemo + 1);
        } else {
            setIndex(0);
        }
    }

    /**
     * text  exampel handler
     */
    function handleChangeText(e) {
        setText(e.target.value);
    }


    /**
     *  sculpture图像
     */
    let sculpture = sculptureList[index];

    return (
        <>
            <Row>
                <Col span={12}>
                     <Card title="图片状态">
                        <Button onClick={onClickHandler} type="primary">Next</Button>
                        <Button onClick={ageOnClickHandler} type="primary">年龄</Button>
                        <h2>
                            <i>{sculpture.name}</i> by {sculpture.artist}
                        </h2>
                        <h3>({index+1} of {sculptureList.length})</h3>
                        <img src={sculpture.url} alt={sculpture.alt}></img>
                        <p>{sculpture.description}</p>
                        <p>{stateDemo}</p>
                        <p className={styles.age}>{age}</p>
                     </Card>   
                </Col>
                <Col span={12}>
                     <Card title="传递对象演示">
                        <label>
                            FirstName: 
                            <input type="text" value={form.firstName} onChange={
                                e => {
                                    setForm({...form, firstName: e.target.value});
                                }
                            } />
                        </label>
                        <p>{form.firstName}</p>
                     </Card>   
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Card title="传递初始函数演示">
                        <input type="text" value={text} onChange={e => {
                            setText(e.target.value);
                        }} />
                        <Button onClick={ ()=>{
                                setText("");
                                setTodos([{
                                    id: todos.length,
                                    text: text
                                }, ...todos]);
                            }
                        } type="primary">
                            Add
                        </Button>
                        <ul>
                            {todos.map(item => {
                                return (<li key={item.id}>{item.text}</li>);
                            })}
                        </ul>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="文本字段字符串">
                        <Input value={text} onChange={handleChangeText}></Input>
                        <p>您输入了:{text}</p>
                        <Button onClick={() => setText('hello')}>重置</Button>
                    </Card>
                </Col>
            </Row>
            
        </>
    );
};

export default StateDemoComponent;
