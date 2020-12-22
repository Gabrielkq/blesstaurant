const Button = ({ onClick, text }) => {
        return (
            <>
              <p className="button" onClick={onClick}> {text}</p> 
            </>
        );
    }
export default Button;