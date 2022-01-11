import './App.css'
import Expenses from './components/Expenses';
function App() {
    //DATA FROM BACKEND
 const expenses = [
    {
        id:'el1',
        title:'Toilet Paper',
        amout:200,
        date:new Date(2020, 7, 14)
    },
    {
        id:'el2',
        title:'Car Insuranse',
        amout:1.2,
        date:new Date(2021, 2, 28)
    },
    {
        id:'el3',
        title:'Flowers',
        amout:3,
        date:new Date(2021, 3, 23)
    },
    {
        id:'el4',
        title:'Cake',
        amout:1,
        date:new Date(2021, 2, 1)
    },
    {
        id:'el5',
        title:'Paper',
        amout:2.5,
        date:new Date(2021, 6, 18)
    },
]
    return(
        //let div = document.createElement('div') болуп тузулот под капотом
        //div.className = 'App'
        //div.append()
        <div className='App'>
            <h1>Hello</h1>
        <Expenses item = {expenses}/>
        </div>
    )
}
export default App;