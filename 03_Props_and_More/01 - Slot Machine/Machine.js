class Machine extends React.Component {
  render() {
    
    const { s1, s2, s3 } = this.props;
    const winner = (s1 === s2) && (s2 === s3);
    // You can store css styling in a variable and then embed it in-line
    const colors = { fontSize: '50px', backgroundColor: 'purple'};

    return (
      <div className="Machine">
      <label htmlFor="textInput" />
        <p style={colors}>{s1} {s2} {s3}</p>
        {/* You can use a ternary operator to switch between different styling */}
        <p className={winner ? 'win' : 'lose'}>{winner ? 'Winner!' : 'Loser!'}</p>
      </div>  
    )
  }
}