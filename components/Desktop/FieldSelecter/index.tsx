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
    { id: 'text', name: 'Text' },
    { id: 'image', name: 'Image' },
    { id: 'button', name: 'Button' },
    { id: 'input', name: 'Input' },
    { id: 'checkbox', name: 'Checkbox' },
    { id: 'radio', name: 'Radio' },
    { id: 'select', name: 'Select' },
    { id: 'textarea', name: 'Textarea' },
    { id: 'date', name: 'Date' },
    { id: 'time', name: 'Time' },
    { id: 'datetime', name: 'Datetime' },
    { id: 'number', name: 'Number' },
    { id: 'range', name: 'Range' },
    { id: 'color', name: 'Color' },
    { id: 'file', name: 'File' },
    { id: 'hidden', name: 'Hidden' },
    { id: 'submit', name: 'Submit' },
    { id: 'reset', name: 'Reset' },
    { id: 'fieldset', name: 'Fieldset' },
    { id: 'legend', name: 'Legend' },
    { id: 'datalist', name: 'Datalist' },
    { id: 'optgroup', name: 'Optgroup' },
    { id: 'option', name: 'Option' },
    { id: 'output', name: 'Output' },
    { id: 'progress', name: 'Progress' },
    { id: 'meter', name: 'Meter' },
    { id: 'details', name: 'Details' },
    { id: 'summary', name: 'Summary' },
    { id: 'dialog', name: 'Dialog' },
    { id: 'menu', name: 'Menu' },
    { id: 'menuitem', name: 'Menuitem' },
    { id: 'script', name: 'Script' },
    { id: 'noscript', name: 'Noscript' },
    { id: 'applet', name: 'Applet' },
    { id: 'embed', name: 'Embed' },
    { id: 'object', name: 'Object' },
    { id: 'param', name: 'Param' },
    { id: 'iframe', name: 'Iframe' },
    { id: 'canvas', name: 'Canvas' },
    { id: 'svg', name: 'Svg' },
    { id: 'math', name: 'Math' },
    { id: 'style', name: 'Style' },
    { id: 'head', name: 'Head' },
    { id: 'title', name: 'Title' },
  ]);
  const [selectedItems, setSelectedItems] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);


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



    if (!destination && source.droppableId === 'topList') {
      let newItems = [...selectedItems];
      newItems.splice(source.index, 1);
      setSelectedItems(newItems);
      return;
    }

    if (!destination) return;

    if (source.droppableId === 'bottomList' && destination.droppableId === 'bottomList') return;

    if (destination.droppableId === 'topList' && source.droppableId === 'bottomList') {
      const itemCopy = {
        name: items[source.index].name,
        id: `${items[source.index].id}-${new Date().getTime()}`,
      };

      let newItems = [...selectedItems];
      newItems.splice(destination.index, 0, itemCopy);
      setSelectedItems(newItems);
    }

    if (source.droppableId === 'topList' && destination.droppableId === 'topList') {
      let newItems = [...selectedItems];
      const [reorderedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, reorderedItem);
      setSelectedItems(newItems);
    }

    //if destination is out of context and source is is topList then remove item from topList


  };

  return (
    <>
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div
          className={`h-[calc(100vh-80px)] z-[1] ${!open ? 'left-[-38vw]' : 'left-[8vw]'
            } transition-all duration-500
        border border-t-0 border-white/10 fixed bottom-0 px-[1%]  flex flex-col  items-center py-[3vh] w-[30vw] bg-bdgray`}>
          <div className='w-full  relative h-full flex flex-col items-center'>

            <div className='w-full h-full mt-[1vh]'>
              <div className='w-full flex justify-start gap-[0.5rem] items-center'>
                <button onClick={toggleOpen}>
                  <ChevronLeftIcon className='h-[3vh] w-[3vh] text-white/80' />
                </button>
                <p className='text-white font-[600] '>Components</p>
              </div>
              <div className='w-full h-full mt-[3vh]'>
                {/* drop items here */}
                <Droppable droppableId="topList">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      className="drop-area-top q_scroll w-full h-full overflow-y-auto pb-[15vh] pt-[1vh]" // Add your class for styling
                    >
                      {selectedItems.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="draggable-item mb-[1rem] text-bgray font-medium flex h-[6vh] rounded-md w-full items-center px-[4%] justify-between bg-white/80" // Add your class for styling
                            >
                              {item.name}
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

            <div className={`w-full transition-all duration-300 h-[calc(100%-3vh)] ${newComponentOpen ? 'bottom-[-5%]' : 'bottom-[-89%]'} flex flex-col bg-bdgray px-[2%] py-[2%] items-center rounded-b-none border-b-0 rounded-2xl absolute left-0 border border-white/50`}>
              <button onClick={() => setNewComponentOpen(e => !e)} className='flex h-[7vh] shrink-0 rounded-xl w-full items-center px-[4%] justify-between bg-white/80'>
                <p className='text-bgray font-medium '>Add Component</p>
                <ChevronUpIcon className={`${newComponentOpen ? 'transform rotate-180' : ''
                  } h-[3vh] w-[3vh] transition-all duration-300 text-bgray`} />
              </button>
              <div className='w-full h-full mt-[3vh]'>
                <Droppable droppableId="bottomList">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      className="drop-area-bottom q_scroll w-full h-full overflow-y-auto pt-[2vh] pb-[10vh]" // Add your class for styling
                    >
                      {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="draggable-item mb-[1rem] text-bgray font-medium flex h-[6vh] rounded-md w-full items-center px-[4%] justify-between bg-white/80" // Add your class for styling
                            >
                              {item.name}
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