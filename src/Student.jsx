import Score from "./Score";



const Student = (props) => {
  return (  
    <div className='card' >
      <div className="title">

        <h1 className="title-text" >{props.student.name}</h1>

        <h6 className="title-text" >{props.student.bio}</h6>
      </div>
      <div className="card-body">
      {props.student.scores.map((score, idx) => 
        <Score key={idx} score={score}/>
        )}
      </div>
    </div>
  );
}
 
export default Student
