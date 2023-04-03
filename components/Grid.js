import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from 'react'

export default function Grid() {

  const [cells, setCells] = useState([]);


  function getPosition() {
    const row = Math.floor(Math.random() * 10) + 1;
    const col = Math.floor(Math.random() * 10) + 1;

    const cellPosition = { col, row };

    return cellPosition;
  }

  function addCell() {
    const cellPosition = getPosition();
    const cellAlreadyExists = cells.some((cell) => cell.col === cellPosition.col && cell.row === cellPosition.row);

    if (cellAlreadyExists) {
      addCell();
    } else {
      setCells((prevCells) => [
        ...prevCells,
        cellPosition
      ]);
    }

  }

  function deleteRandomCell() {
    const randomCellPosition = Math.floor(Math.random() * cells.length);
    const cellsFilter = cells.filter((_, index) => index !== randomCellPosition);
    setCells(cellsFilter);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cells.length > 50) {
        deleteRandomCell();
      }
      addCell();
    }, 50);

    return () => clearInterval(intervalId);
  }, [cells]);



  return (
    <div className="hero-grid">
      <AnimatePresence>
        {cells.map((cell) => {
          return <motion.img
            transition={
              { duration: 1 }
            }

            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.7, scale: 0.8 }} src="/square.png" key={`${cell.col}-${cell.row}`} style={{ gridColumn: cell.col, gridRow: cell.row, width: '32px' }} />
        })}
      </AnimatePresence>

    </div>
  )
}
