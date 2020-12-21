const Button = ({ onClick, text }) => {
        return (
            <div className="button" onClick={onClick}>
              <pre> {text}</pre> 
            </div>
        );
    }
export default Button;