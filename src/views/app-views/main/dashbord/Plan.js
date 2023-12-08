import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Planner = () => {
  const [furniture, setFurniture] = useState([]);

  const chair = (
    <Draggable bounds="parent">
      <div className="handle chair text-center">Chair</div>
    </Draggable>
  );
  const table = (
    <Draggable bounds="parent">
      <div className="handle table text-center">Table</div>
    </Draggable>
  );

  return (
    <div className="">
      <div className="h-100 rounded p-2">
        <button
          className="p-2 m-2 rounded"
          onClick={() => setFurniture([...furniture, chair])}
        >
          Добавить стул
        </button>
        <button
          className="p-2 m-2 rounded"
          onClick={() => setFurniture([...furniture, table])}
        >
          Добавить стол
        </button>
        <button className="p-2 m-2 rounded" onClick={() => setFurniture([])}>
          Удалить все элементы
        </button>
      </div>
      <div
        className="box bg-gray-light"
        style={{
          height: '500px',
          width: '500px',
          position: 'relative',
          overflow: 'auto',
          padding: '0',
        }}
      >
        <div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
          {furniture.map((el) => {
            return el;
          })}
        </div>
      </div>
    </div>
  );
}
  
  
export default Planner;