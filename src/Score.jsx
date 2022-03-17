

const Score = (props) => {
  return ( 
    <>
          <h4 className="card-text">Test Date: {props.score.date}</h4>
          <h4 className="card-text">Score: {props.score.score}</h4 >
    </>

   );
}
 
export default Score;