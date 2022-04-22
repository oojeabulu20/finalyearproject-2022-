import './App.css';
import ExpenseGraph from './Components/ExpenseGraph';
import ExpenseForm from './Components/ExpenseForm';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto max-w-6xl text-center drop-shaow-lg text-gray-800'>
        <h1 className='text-4xl py-8 mb-10 bg-cyan-500 text-white rounded'>Hospital Expense Tracker</h1>

        {/*Grid Columns */}
        <div className='grid md:grid-cols-2 gap-4'>
          {/* Chart */}
          <ExpenseGraph></ExpenseGraph>
          {/* Forms */}
          <ExpenseForm></ExpenseForm>
        </div>
      </div>
    </div>
  );
}

export default App;
