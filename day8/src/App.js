
import './App.css';
import styles from './Button.module.css'


function App() {

  return (
  <>
   <div style={{
    color:'blue',
    fontSize:'50px',
    textAlign:'center',
    padding:'30px'
    }}>
    Inline style
   </div>

   <div className='myStyles'>
       This is Css class.
   </div >
   <div style={
    {
      display:'flex',
      justifyContent:'center',
    }
   }>
       <button className={styles.button}>Click Me!! </button>
   </div>
    
  </>
  );
}

export default App;
