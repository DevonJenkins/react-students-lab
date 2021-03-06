
import './App.css';
import Student from './Student';

function App() {
  const students = [
    {
      name: 'Bump Chump',
      bio: "My name's bump and i'm fixin to lift weights for three days straight",
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Zest West',
      bio: "If you come into MY puffin parlor, I'm gonna come out whoopin",
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Dusty Staccato',
      bio: "I'm lookin for tech support on my hot air balloon",
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ]

  return (
    <div className='cards'>
      {students.map((student, idx) => 
        <Student key={idx} student={student} />
      )}
    </div>
  );
}

export default App;
