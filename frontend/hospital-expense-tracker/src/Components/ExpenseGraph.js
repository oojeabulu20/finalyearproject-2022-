import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ExpenseLabels from './ExpenseLabels';
import { UpdateChart,getTotal } from "../calculations/calculations"
import {default as api} from "../store/apiSlicing"


Chart.register(ArcElement)


export default function ExpenseGraph() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    let chartData;
    
    if (isFetching) {
        chartData = <div>Fetching</div>    
    } else if (isSuccess) {
        chartData = <Doughnut {...UpdateChart(data)}></Doughnut>
    } else if (isError) {
        chartData = <div>Error</div>
    }
  return (
      <div className='flex justify-content max-w-xs mx-auto'>
          <div className='item'>
              <div className="chart relative">
                    {chartData}
                  <h3 className='mb-4 font-bold title'>Total:
                      <span className='block text-3xl text-cyan-400'>£{getTotal(data) ?? 0}</span>
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
