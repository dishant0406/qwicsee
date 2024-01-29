'use client'

import { useFieldSelectorModalStore } from '@/lib/Zustand/hooks/ModalStates'
import { ChevronLeftIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import useClickAway from '@/lib/hooks/useClickAway'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, DropResult, Droppable, DroppableProps } from '@hello-pangea/dnd'

type Props = {}



const FieldSelecter = (props: Props) => {
  const { open, toggleOpen } = useFieldSelectorModalStore()
  const [newComponentOpen, setNewComponentOpen] = useState(false)
  const [items, setItems] = useState([
    'Text',
    'Image',
    'Button',
    'Input',
    'Select',
  ]);
  const [selectedItems, setSelectedItems] = useState([]);


  useEffect(() => {
    if (!open) {
      setNewComponentOpen(false)
    }
  }
    , [open])



  useEffect(() => {
    if (!open) {
      setNewComponentOpen(false);
    }
  }, [open]);

  const handleDragStart = () => {
    setNewComponentOpen(false);
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === 'bottomList' && destination.droppableId === 'bottomList') return;

    console.log(source.index, destination.index)
    if (destination.droppableId === 'topList') {
      const newItems = [...selectedItems];
      newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, items[source.index]);
      setSelectedItems(newItems);
    }

    if (source.droppableId === 'topList' && destination.droppableId === 'topList') {
      const newItems = [...selectedItems];
      newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, selectedItems[source.index]);
      setSelectedItems(newItems);
    }

  };

  return (
    <>
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div
          className={`h-[calc(100vh-80px)] z-[1] ${!open ? 'left-[-38vw]' : 'left-[8vw]'
            } transition-all duration-500
        border border-t-0 border-white/10 fixed bottom-0 px-[1%]  flex flex-col  items-center py-[3vh] w-[30vw] bg-bgray`}>
          <div className='w-full  relative h-full flex flex-col items-center'>

            <div className='w-full h-full mt-[1vh]'>
              <div className='w-full flex justify-start gap-[0.5rem] items-center'>
                <button onClick={toggleOpen}>
                  <ChevronLeftIcon className='h-[3vh] w-[3vh] text-white/80' />
                </button>
                <p className='text-white font-[600] '>Components</p>
              </div>
              <div className='w-full h-full flex-grow flex flex-col items-center gap-[1rem] mt-[3vh]'>
                {/* drop items here */}
                <Droppable droppableId="topList">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      className="drop-area-top w-full h-full flex-grow flex flex-col items-center gap-[1rem]" // Add your class for styling
                    >
                      {selectedItems.map((item, index) => (
                        <Draggable key={item} draggableId={item} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="draggable-item text-bgray font-medium flex h-[6vh] rounded-md w-full items-center px-[4%] justify-between bg-white/80" // Add your class for styling
                            >
                              {item}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>

            </div>

            <div className={`w-full transition-all duration-300 h-[calc(100%-3vh)] ${newComponentOpen ? 'bottom-[-5%]' : 'bottom-[-89%]'} flex flex-col bg-bgray px-[2%] py-[2%] items-center rounded-b-none border-b-0 rounded-2xl absolute left-0 border border-white/50`}>
              <button onClick={() => setNewComponentOpen(e => !e)} className='flex h-[7vh] rounded-xl w-full items-center px-[4%] justify-between bg-white/80'>
                <p className='text-bgray font-medium '>Add Component</p>
                <ChevronUpIcon className={`${newComponentOpen ? 'transform rotate-180' : ''
                  } h-[3vh] w-[3vh] transition-all duration-300 text-bgray`} />
              </button>
              <div className='w-full overflow-y-auto flex-grow flex flex-col items-center gap-[1rem] mt-[3vh]'>


                <Droppable droppableId="bottomList">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      className="drop-area-bottom w-full flex flex-col items-center gap-[1rem]" // Add your class for styling
                    >
                      {items.map((item, index) => (
                        <Draggable key={item} draggableId={item} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="draggable-item text-bgray font-medium flex h-[6vh] rounded-md w-full items-center px-[4%] justify-between bg-white/80" // Add your class for styling
                            >
                              {item}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  )
}

export default FieldSelecter