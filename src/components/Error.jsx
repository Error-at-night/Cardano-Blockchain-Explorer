const Error = ({ error }) => {
    return ( 
        <div className="mt-5 mb-5">
            <h2>Uh oh! We have got a problem</h2>
            <p>{error.message || error.statusText}</p>
        </div>
    );
}
 
export default Error;