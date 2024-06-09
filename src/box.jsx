import logo from './logo.svg';

function Box(props){
    return(
      <div className="box">
        <p style={{ fontWeight: 'bold' }}>{props.name}</p>
        <p style={{ marginBottom: '10px' }}>{props.major}<br/>{props.pos}</p>
      </div>
    )
}


export default Box;