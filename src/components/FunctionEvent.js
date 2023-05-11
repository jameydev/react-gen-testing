export default function FunctionEvent() {
    const handleClick = () => {
        console.log('Button clicked');
    };
    
    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}