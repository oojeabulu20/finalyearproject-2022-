import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ExpenseLabels from './ExpenseLabels';


Chart.register(ArcElement)


const donutConfig = {
    data: {
        datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(0, 0, 255)',
            'rgb(255,255,0)'
        ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10
        }]        
    },
    options: {
        cutout:117
    }
}

export default function ExpenseGraph() {
  return (
      <div className='flex justify-content max-w-xs mx-auto'>
          <div className='item'>
              <div className="chart relative">
                  <Doughnut {...donutConfig}></Doughnut>
                  <h3 className='mb-4 font-bold title'>Total:
                      <span className='block text-3xl text-cyan-400'>£{0}</span>
                  </h3>
              </div>
              <div className='flex flex-col py-10 gap-4'>
                  {/* Labels */}
                  <ExpenseLabels></ExpenseLabels>
              </div>
          </div>
    </div>
  )
}
